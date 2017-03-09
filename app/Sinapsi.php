<?php

namespace Sinapsi;

use Illuminate\Database\Eloquent\Model;

class Sinapsi extends Model
{
    protected $fillable = ['name', 'slug', 'description', 'logo', 'querystring', 'type', 'postview', 'parent_id'];

    public function saveLogo($file)
    {
        //TODO: control extension and size

        $folder = 'storage/public';
        $filename = 'sinapsi_' . $this->id . "." . $file->getClientOriginalExtension();

        $file->move($folder, $filename);
        return $folder . "/" . $filename;
    }

    public function breadcrumbs()
    {
        $breadcrumb = [];
        $parent_id = $this->parent_id;

        while (!empty($parent_id)) {
            $sinapsi = Sinapsi::findOrFail($parent_id);
            $breadcrumb[] = ["sinapsi" => $sinapsi->name,
                "url" => $sinapsi->slug];
            $parent_id = $sinapsi->parent_id;
        };

        return array_reverse($breadcrumb);
    }

    public function childs()
    {
        return $this->hasMany('Sinapsi\Sinapsi', 'parent_id', 'id');
    }
}
