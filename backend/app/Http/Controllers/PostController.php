<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\Post;


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
        
        if (Auth::check() === true) {
            if (Auth::user()->hasRole('admin'))
                $query->withTrashed();
        }
        
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
        
        if (Auth::check() === true) {
            if (Auth::user()->hasRole('admin'))
                $query->withTrashed();
        }
        
        $resource = $query->first();
        
        if (is_null($resource))
           abort(404, 'Not Found');
        
        return $resource;
    }
    
    
    /**
     * Remove the specified resource from storage.
     *
     * @param int $id           Primary key value
     * @return Response         Response object
     */
    public function destroy($id) {
        try {
            $result = Post::whereID($id)->delete();
            
            if ($result == false) {
                abort(404, 'Not Found');
            }
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
            $result = Post::whereID($id)->restore();
            
            if ($result == false) {
                abort(404, 'Not Found');
            }
        } catch (QueryException $e) {
            abort(400, 'Invalid request');
        }
        
        return ['id' => intval($id)];
    }

}
