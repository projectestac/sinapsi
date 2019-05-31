<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\Pivots\SynapseUser;


/**
 * Synapse privilege controller. This class controlls user privileges
 * over a synapse and shows wether a user can manager or edit a
 * given synapse.
 */
class PrivilegeController extends Controller {
    
    
    /**
     * Display a listing of the resource.
     *
     * @return Response         Response object
     */
    public function index(Request $request) {
        $query = SynapseUser::cards();
        
        $query->filter($request);
        $query->include($request);
        $query->sort($request);
        
        if (!Auth::user()->isAdmin()) {
            $query->forManager();
        }
        
        return $query->paginateRequest($request);
    }
    
    
    /**
     * Display the specified resource.
     *
     * @param int $id           Primary key value
     * @return Response         Response object
     */
    public function show($id) {
        $resource = SynapseUser::cards($id)->firstOrFail();
        $this->authorize('show', $resource);
        
        return $resource;
    }


    /**
     * Create a new resource.
     *
     * @return Response         Response object
     */
    public function store(Request $request) {
        $resource = null;
        
        $values = SynapseUser::validateRequired($request);
        $values = SynapseUser::validateFields($request);
        $this->authorize('store', [SynapseUser::class, $values]);
        
        try {
            $resource = SynapseUser::create($values);
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
        $values = SynapseUser::validateFields($request);
        $resource = SynapseUser::whereId($id)->firstOrFail();
        $this->authorize('update', $resource);
        
        try {
            unset($values['synapse_id']);
            unset($values['user_id']);
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
            $query = SynapseUser::whereId($id);
            $resource = $query->firstOrFail();
            $this->authorize('destroy', $resource);
            $resource->delete();
        } catch (QueryException $e) {
            abort(400, 'Invalid request');
        }
        
        return ['id' => intval($id)];
    }

}
