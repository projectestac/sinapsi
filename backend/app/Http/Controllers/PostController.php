<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\Post;
use App\Models\Synapse;
use App\Models\Pivots\PostSynapse;


/**
 * Post controller.
 */
class PostController extends Controller {
    
    
    /**
     * Display a listing of the resource.
     *
     * @return Response         Response object
     */
    public function index(Request $request) {
        $query = Post::cards();
        
        Post::mutateURLs($request);
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
        $query = Post::cards($id);
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
            $query = Post::whereId($id);
            $resource = $query->firstOrFail();
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
            $query = Post::whereId($id);
            $query->withTrashedIfAdmin();
            $resource = $query->firstOrFail();
            $resource->restore();
        } catch (QueryException $e) {
            abort(400, 'Invalid request');
        }
        
        return ['id' => intval($id)];
    }

}
