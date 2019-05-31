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
        return School::cards($id)->firstOrFail();
    }


    /**
     * Update the specified resource in storage.
     *
     * @param int $id           Primary key value
     * @return Response         Response object
     */
    public function update(Request $request, $id) {
        $values = School::validateFields($request);
        $resource = School::whereId($id)->firstOrFail();
        
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
            School::validateConstrains($request);
            abort(400, 'Invalid request');
        }
        
        return [
            'id' => $resource->id,
            'author_id' => $resource->author->id
        ];
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param int $id           Primary key value
     * @return Response         Response object
     */
    public function destroy($id) {
        try {
            $query = School::whereId($id);
            $resource = $query->firstOrFail();
            $resource->delete();
        } catch (QueryException $e) {
            abort(400, 'Invalid request');
        }
        
        return ['id' => intval($id)];
    }

}
