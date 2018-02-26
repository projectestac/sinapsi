<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\Pivots\PostSynapse;


/**
 * Synapse bumps controller. This class controlls the posts attached
 * manually to a synapse.
 */
class BumpController extends Controller {
    
    
    /**
     * Display a listing of the resource.
     *
     * @return Response         Response object
     */
    public function index(Request $request) {
        $query = PostSynapse::cards()->forEditor();
        
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
        $resource = PostSynapse::cards($id)->forEditor()->first();
        
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
        
        $values = PostSynapse::validateRequired($request);
        $values = PostSynapse::validateFields($request);
        
        // Validate that the user can edit the synapse
        
        $synapse_id = $values['synapse_id'];
        
        if (!Auth::user()->canEditSynapse($synapse_id)) {
            abort(403, 'Forbbiden');
        }
        
        // Create a new resource
        
        try {
            $resource = PostSynapse::create($values);
        } catch (QueryException $e) {
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
        $values = PostSynapse::validateFields($request);
        $resource = PostSynapse::whereId($id)->forEditor()->first();
        
        if (is_null($resource))
            abort(404, 'Not Found');
        
        try {
            unset($values['post_id']);
            unset($values['synapse_id']);
            
            $resource->update($values);
        } catch (QueryException $e) {
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
            $result = PostSynapse::whereId($id)->forEditor()->delete();
            
            if ($result == false) {
                abort(404, 'Not Found');
            }
        } catch (QueryException $e) {
            abort(400, 'Invalid request');
        }
        
        return ['id' => intval($id)];
    }
}
