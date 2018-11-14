<?php

namespace App\Http\Controllers;

use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\Synapse;
use App\Models\Tag;


/**
 * Synapse controller.
 */
class SynapseController extends Controller {
    
    
    /**
     * Display a listing of the resource.
     *
     * @return Response         Response object
     */
    public function index(Request $request) {
        $query = Synapse::cards();
        
        $query->filter($request);
        $query->include($request);
        $query->sort($request);
        
        return $query->paginateRequest($request);
    }
    
    
    /**
     * Display the specified resource.
     *
     * @param int $id           Primary key value
     * @return Response         Response object
     */
    public function show($id) {
        return Synapse::cards($id)->firstOrFail();
    }


    /**
     * Create a new resource.
     *
     * @return Response         Response object
     */
    public function store(Request $request) {
        $resource = null;
        
        $values = Synapse::validateRequired($request);
        $values = Synapse::validateFields($request);
        
        try {
            $resource = Synapse::create($values);
        } catch (QueryException $e) {
            Synapse::validateConstrains($request);
            abort(400, 'Invalid request');
        }
        
        return ['id' => $resource->id];
    }


    /**
     * Update the specified resource in storage.
     *
     * @param int $id           Primary key value
     * @return Response         Response object
     */
    public function update(Request $request, $id) {
        $values = Synapse::validateFields($request);
        $resource = Synapse::whereId($id)->firstOrFail();
        $this->authorize('update', $resource);
        
        try {
            $values = $this->filterValues($values, $resource);
            $resource->update($values);
        } catch (QueryException $e) {
            Synapse::validateConstrains($request);
            abort(400, 'Invalid request');
        }
        
        return ['id' => intval($id)];
    }
    
    
    /**
     * Remove the specified resource from storage.
     *
     * @param int $id           Primary key value
     * @return Response         Response object
     */
    public function destroy($id) {
        try {
            $query = Synapse::whereId($id);
            $resource = $query->firstOrFail();
            $this->authorize('destroy', $resource);
            $resource->forceDelete();
        } catch (QueryException $e) {
            abort(400, 'Invalid request');
        }
        
        return ['id' => intval($id)];
    }
    
    
    /**
     * Display a listing of synapse root/child nodes.
     *
     * @return Response         Response object
     */
    public function nodes(Request $request, $id = null) {
        $query = Synapse::nodeCards();
        
        if (!$request->has('search') || !is_null($id)) {
            $query->where('synapse_id', $id);
        }
        
        // Include children of the node if requested
        
        $with = $request->get('with');
        
        if (is_array($with) && in_array('childs', $with)) {
            $query->with(['childs' => function($query) use ($request) {
                $query->nodeCards();
                $query->sort($request);
            }]);
        }
        
        // Filter and sort the root nodes
        
        $query->filter($request);
        $query->sort($request);
        
        return $query->paginateRequest($request);
    }


    /**
     * Create a new synapse for a tag.
     *
     * @param int $id           Tag's primary key value
     * @return Response         Response object
     */
    public function storeForTag(Request $request, $id) {
        $resource = null;
        $query = Tag::cards($id)->withTrashed();
        $tag = $query->firstOrFail();
        
        // Validate the request
        
        $values = Synapse::validateRequired($request);
        $values = Synapse::validateFields($request);
        
        // Check that a synapse for the tag does not exist
        
        if ($tag->synapse()->withTrashed()->exists()) {
            abort(422, 'Synapse already exists');
        }
        
        // Set the default synapse options
        
        $values['type'] = 'tags';
        $values['filters'] = ['tag_id' => $tag->id];
        
        // Create the synapse and attach it to the tag
        
        try {
            $resource = Synapse::create($values);
            $resource->update(['deleted_at' => $tag->deleted_at]);
            $tag->update(['synapse_id' => $resource->id]);
        } catch (QueryException $e) {
            Synapse::validateConstrains($request);
            abort(400, 'Invalid request');
        }
        
        return ['id' => $resource->id];
    }


    /**
     * Filters non-updatable values for a resource.
     *
     * This method filters the given values array by removing from
     * it all the values that cannot be updated for the given
     * resource object.
     *
     * @param array $values         Values to filter
     * @param \App\Models\Synapse   Model to update
     *
     * @return array                Filtered values
     */
    private function filterValues(array $values, Synapse $resource) {
        $filtered = $values;
        
        if ($resource->type === 'authors') {
            unset($filtered['filters']);
            unset($filtered['synapse_id']);
        }
        
        if ($resource->slug === Synapse::GENERAL_SLUG) {
            unset($filtered['slug']);
        }
        
        return $filtered;
    }

}
