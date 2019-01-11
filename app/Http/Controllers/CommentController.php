<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\Comment;


/**
 * Comment controller.
 */
class CommentController extends Controller {
    
    
    /**
     * Display a listing of the resource.
     *
     * @return Response         Response object
     */
    public function index(Request $request) {
        $query = Comment::cards();
        
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
        return Comment::cards($id)->firstOrFail();
    }


    /**
     * Create a new resource.
     *
     * @return Response         Response object
     */
    public function store(Request $request) {
        $resource = null;
        
        $request->merge(['user_id' => Auth::id(),]);
        $values = Comment::validateRequired($request);
        $values = Comment::validateFields($request);
        
        try {
            $values['user_id'] = Auth::id();
            $resource = Comment::create($values);
        } catch (QueryException $e) {
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
            $query = Comment::whereId($id);
            $resource = $query->firstOrFail();
            $resource->delete();
        } catch (QueryException $e) {
            abort(400, 'Invalid request');
        }
        
        return ['id' => intval($id)];
    }

}
