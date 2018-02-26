<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\User;
use App\Models\Post;
use App\Models\Pivots\PostUser;


/**
 * Reaction controller. This class controlls user reactions to posts,
 * and shows wether the post was commented, liked or favourited.
 */
class ReactionController extends Controller {
    
    
    /**
     * Display the specified resource.
     *
     * @param int $id           Primary key value
     * @return Response         Response object
     */
    public function show($id) {
        $resource = Auth::user()
            ->reactions()
            ->wherePostId($id)
            ->first();
        
        if (is_null($resource))
            abort(404, 'Not Found');
        
        return $resource;
    }
    
    
    /**
     * Update the specified resource in storage.
     *
     * @param int $id           Post primary key value
     * @return Response         Response object
     */
    public function update(Request $request, $id) {
        $values = PostUser::validateRequired($request);
        $values = PostUser::validateFields($request);
        
        // Beware to filter guarded fields!
        
        $values = array_intersect_key($values, [
            'favourited' => false,
            'liked' => false
        ]);
        
        // Update or create the relationship
        
        try {
            $user = Auth::user();
            $posts = $user->posts();
            $reactions = $user->reactions();
            
            if ($reactions->wherePostId($id)->exists()) {
                $posts->updateExistingPivot($id, $values);
            } else {
                $posts->attach($id, $values);
            }
        } catch (QueryException $e) {
            abort(400, 'Invalid request');
        }
        
        return ['id' => intval($id)];
    }

}
