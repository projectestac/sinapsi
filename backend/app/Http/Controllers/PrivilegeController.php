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
        $query = SynapseUser::cards()->forManager();
        
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
        $resource = SynapseUser::cards($id)->forManager()->first();
        
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
        
        $values = SynapseUser::validateRequired($request);
        $values = SynapseUser::validateFields($request);
        
        // Validate that the user can administer the synapse
        
        $synapse_id = $values['synapse_id'];
        
        if (!Auth::user()->canManageSynapse($synapse_id)) {
            abort(403, 'Forbbiden');
        }
        
        // Create a new resource
        
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
        $resource = SynapseUser::whereId($id)->forManager()->first();
        
        if (is_null($resource))
            abort(404, 'Not Found');
        
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
            $result = SynapseUser::whereId($id)->forManager()->delete();
            
            if ($result == false) {
                abort(404, 'Not Found');
            }
        } catch (QueryException $e) {
            abort(400, 'Invalid request');
        }
        
        return ['id' => intval($id)];
    }
}
