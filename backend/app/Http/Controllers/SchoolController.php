<?php

namespace App\Http\Controllers;

use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\School;


/**
 * School controller.
 */
class SchoolController extends Controller {
    
    
    /**
     * Display a listing of the resource.
     *
     * @return Response         Response object
     */
    public function index(Request $request) {
        $query = School::cards();
        
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
        $resource = School::cards($id)->first();
        
        if (is_null($resource))
            abort(404, 'Not Found');
        
        return $resource;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param int $id           Primary key value
     * @return Response         Response object
     */
    public function update(Request $request, $id) {
        $values = School::validateFields($request);
        $resource = School::whereId($id)->first();
        
        if (is_null($resource))
            abort(404, 'Not Found');
        
        try {
            $resource->update($values);
        } catch (QueryException $e) {
            School::validateConstrains($request);
            abort(400, 'Invalid request');
        }
        
        return ['id' => intval($id)];
    }


    /**
     * Create a new resource.
     *
     * @return Response         Response object
     */
    public function store(Request $request) {
        $resource = null;
        
        $values = School::validateRequired($request);
        $values = School::validateFields($request);
        
        try {
            $resource = School::create($values);
        } catch (QueryException $e) {
            debug($e);
            School::validateConstrains($request);
            abort(400, 'Invalid request');
        }
        
        return ['id' => $resource->id];
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param int $id           Primary key value
     * @return Response         Response object
     */
    public function destroy($id) {
        try {
            $result = School::whereId($id)->delete();
            
            if ($result == false) {
                abort(404, 'Not Found');
            }
        } catch (QueryException $e) {
            abort(400, 'Invalid request');
        }
        
        return ['id' => intval($id)];
    }

}
