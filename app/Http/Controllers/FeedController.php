<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\User;
use App\Models\Feed;


/**
 * Feed controller.
 */
class FeedController extends Controller {
    
    
    /**
     * Display a listing of the resource.
     *
     * @return Response         Response object
     */
    public function index(Request $request) {
        $query = Feed::cards();
        
        Feed::mutateURLs($request);
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
        return Feed::cards($id)->firstOrFail();
    }


    /**
     * Create a new resource.
     *
     * @return Response         Response object
     */
    public function store(Request $request) {
        $resource = null;
        
        $values = Feed::validateRequired($request);
        $values = Feed::validateFields($request);
        $this->authorize('store', [Feed::class, $values]);
        
        // Create a new resource or untrash it if a deleted feed with
        // the same URL already exists
        
        try {
            $query = Feed::where('url', $values['url']);
            $resource = $query->onlyTrashed()->first();
            
            if (is_null($resource)) {
                $resource = Feed::create($values);
            } else {
                $resource->setAttribute('author_id', $author_id);
                $resource->setAttribute('deleted_at', null);
                $resource->save();
            }
        } catch (QueryException $e) {
            Feed::validateConstrains($request);
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
        $values = Feed::validateFields($request);
        $resource = Feed::whereId($id)->firstOrFail();
        $this->authorize('update', $resource);
        
        try {
            unset($values['author_id']);
            $resource->update($values);
        } catch (QueryException $e) {
            Feed::validateConstrains($request);
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
            $query = Feed::whereId($id);
            $resource = $query->firstOrFail();
            $this->authorize('destroy', $resource);
            $resource->delete();
        } catch (QueryException $e) {
            abort(400, 'Invalid request');
        }
        
        return ['id' => intval($id)];
    }

}
