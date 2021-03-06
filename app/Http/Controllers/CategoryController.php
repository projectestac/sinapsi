<?php

namespace App\Http\Controllers;

use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\Category;


/**
 * Category controller.
 */
class CategoryController extends Controller {


    /**
     * Display a listing of the resource.
     *
     * @return Response         Response object
     */
    public function index(Request $request) {
        $query = Category::cards();

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
        return Category::cards($id)->firstOrFail();
    }


    /**
     * Create a new resource.
     *
     * @return Response         Response object
     */
    public function store(Request $request) {
        $resource = null;

        $values = Category::validateRequired($request);
        $values = Category::validateFields($request);

        try {
            $resource = Category::create($values);
        } catch (QueryException $e) {
            Category::validateConstrains($request);
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
        $values = Category::validateFields($request);
        $resource = Category::whereId($id)->firstOrFail();

        try {
            $resource->update($values);
        } catch (QueryException $e) {
            Category::validateConstrains($request);
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
            $query = Category::whereId($id);
            $resource = $query->firstOrFail();
            $resource->delete();
        } catch (QueryException $e) {
            abort(400, 'Invalid request');
        }

        return ['id' => intval($id)];
    }

}
