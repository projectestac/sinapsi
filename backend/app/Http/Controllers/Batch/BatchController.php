<?php

namespace App\Http\Controllers\Batch;

use DB;
use Illuminate\Database\QueryException;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Http\Controllers\Controller;


/**
 * Batch operations controller.
 */
class BatchController extends Controller {

    /** Attribute definitions */
    protected static $fields = [
        'entries' =>            'required|array|min:1|max:100',
        'entries.*.method' =>   'required|string',
        'entries.*.path' =>     'required|string|min:1',
        'entries.*.params' =>   'array|nullable'
    ];


    /**
     * Batch process multiple requests.
     *
     * @return Response         Response object
     */
    public function process(Request $request) {
        $this->validate($request, static::$fields);

        $entries = $request->get('entries');
        $contents = [];

        DB::beginTransaction();

        try {
            foreach ($entries as $entry) {
                $subrequest = $this->createRequest($request, $entry);
                $response = app()->handle($subrequest);
                $contents[] = $response->getOriginalContent();

                if ($response->status() >= 400) {
                    $response->throwResponse();
                }
            }
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }

        DB::commit();

        return $contents;
    }


    /**
     * Create a new request from a base request an a batch entry.
     *
     * @param $entry        Batch entry
     * @param $base         Base request object
     *
     * @return              Request object
     */
    private function createRequest(Request $base, $entry) {
        $path = $entry['path'];
        $method = $entry['method'];
        $params = [];

        // Set the request parameters if any where provided

        if (key_exists('params', $entry)) {
            if (is_array($entry['params'])) {
                $params = $entry['params'];
            }
        }

        // Create a new request for the entry

        $request = Request::create($path, $method, $params);

        // Copy the relevant request headers from the base

        if ($base->headers->has('Accept')) {
            $accept = $base->headers->get('Accept');
            $request->headers->set('Accept', $accept);
        }

        debug($request);

        return $request;
    }

}
