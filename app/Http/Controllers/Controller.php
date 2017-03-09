<?php

namespace Sinapsi\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function buildUrlFilters($params)
    {
        $filters = [];
        foreach ($params as $key=>$value) {
            $sub = [];
            $arr_val = explode(",", $value);
            foreach ($arr_val as $val) {
                array_push($sub, [ "ID" => $val, "text" => $val ]);
            }
            $filters[$key]=$sub;
        }
        return $filters;
    }

    public function clearSelected()
    {
        return array(
            'q'          => '',
            'tags'       => '',
            'cities'     => '',
            'schools'    => '',
            'school_type'=> '',
            'se'         => '',
            'st'         => '',
            'channels'   => '',
            'admins'     => '',
            'u'          => '',
            'sd'         => '',
            'ed'         => ''
        );
    }
}
