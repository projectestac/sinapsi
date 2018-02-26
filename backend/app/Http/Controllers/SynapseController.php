<?php

namespace App\Http\Controllers;

use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\Synapse;


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
     * Display a listing of synapse root/child nodes.
     *
     * @return Response         Response object
     */
    public function nodes(Request $request, $id = null) {
        $query = Synapse::nodeCards();
        
        if (!$request->has('search') || !is_null($id))
            $query->where('synapse_id', $id);
        
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
     * Display the specified resource.
     *
     * @param int $id           Primary key value
     * @return Response         Response object
     */
    public function show($id) {
        $resource = Synapse::cards($id)->first();
        
        if (is_null($resource))
            abort(404, 'Not Found');
        
        return $resource;
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
        $resource = Synapse::whereId($id)->forEditor()->first();
        
        if (is_null($resource))
            abort(404, 'Not Found');
        
        // Filter out non-updatable values
        
        if ($resource->type === 'authors') {
            unset($values['filters']);
            unset($values['synapse_id']);
        }
        
        if ($resource->slug === Synapse::GENERAL_SLUG) {
            unset($values['slug']);
        }
        
        // Update the synapse resource
        
        try {
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
        // The main synapse cannot be destroyed
        
        $resource = Synapse::whereId($id)->first();
        
        if ($resource->slug === Synapse::GENERAL_SLUG) {
            abort(400, 'Invalid request');
        }
        
        // Delete the synapse
        
        try {
            $result = Synapse::whereId($id)->delete();
            
            if ($result == false) {
                abort(404, 'Not Found');
            }
        } catch (QueryException $e) {
            abort(400, 'Invalid request');
        }
        
        return ['id' => intval($id)];
    }

}
