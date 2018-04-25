<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\Tag;


/**
 * Tag controller.
 */
class TagController extends Controller {
    
    
    /**
     * Display a listing of the resource.
     *
     * @return Response         Response object
     */
    public function index(Request $request) {
        $query = Tag::cards();
        
        $query->withTrashedIfAdmin();
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
        $query = Tag::cards($id);
        $query->withTrashedIfAdmin();
        
        return $query->firstOrFail();
    }
    
    
    /**
     * Remove the specified resource from storage.
     *
     * @param int $id           Primary key value
     * @return Response         Response object
     */
    public function destroy($id) {
        try {
            $resource = Tag::whereId($id)->firstOrFail();
            $resource->delete();
        } catch (QueryException $e) {
            abort(400, 'Invalid request');
        }
        
        return ['id' => intval($id)];
    }
    
    
    /**
     * Restore the specified soft-deleted resource.
     *
     * @param  int $id           Primary key value
     * @return  Response         Response object
     */
    public function restore($id) {
        try {
            $query = Tag::whereId($id)->withTrashed();
            $resource = $query->firstOrFail();
            $resource->restore();
        } catch (QueryException $e) {
            abort(400, 'Invalid request');
        }
        
        return ['id' => intval($id)];
    }

}
