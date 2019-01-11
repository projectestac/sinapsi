<?php

namespace App\Http\Controllers;

use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\Author;


/**
 * Author controller.
 */
class AuthorController extends Controller {
    
    
    /**
     * Display a listing of the resource.
     *
     * @return Response         Response object
     */
    public function index(Request $request) {
        $query = Author::cards();
        
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
        return Author::cards($id)->firstOrFail();
    }


    /**
     * Update the specified resource in storage.
     *
     * @param int $id           Primary key value
     * @return Response         Response object
     */
    public function update(Request $request, $id) {
        $values = Author::validateFields($request);
        $resource = Author::whereId($id)->firstOrFail();
        $this->authorize('update', $resource);
        
        try {
            $values = $this->filterValues($values, $resource);
            $resource->update($values);
        } catch (QueryException $e) {
            Author::validateConstrains($request);
            abort(400, 'Invalid request');
        }
        
        return ['id' => intval($id)];
    }


    /**
     * Filters non-updatable values for a resource.
     *
     * This method filters the given values array by removing from
     * it all the values that cannot be updated for the given
     * resource object.
     *
     * @param array $values         Values to filter
     * @param \App\Models\Author    Model to update
     *
     * @return array                Filtered values
     */
    private function filterValues(array $values, Author $resource) {
        $filtered = array_intersect_key($values, [
            'municipality_id' => null,
            'territory_id' => null,
            'school_id' => null
        ]);
        
        if ($resource->type === 'schools') {
            unset($filtered['school_id']);
        }
        
        return $filtered;
    }

}
