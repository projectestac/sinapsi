<?php

namespace Sinapsi;

use Illuminate\Database\Eloquent\Model;
use Sunra\PhpSimple\HtmlDomParser;

class Entity extends Model
{
    protected $fillable = ['type', 'name', 'codeid', 'location', 'image', 'url', 'parent_id'];
    protected $dates = ['created_at', 'updated_at'];

    public function getLogo()
    {
        if ($this->image) {
            return $this->image;
        } else {
            try {
                $url = 'https://agora.xtec.cat/' . $this->codename;
                $dom = HtmlDomParser::str_get_html(file_get_contents($url));
                $this->image = $dom->find('#logo_entity')[0]->src;
                $this->save();
            } catch (\Exception $e) {
                $this->image = '';
            }
        }

        return $this->image;
    }

    public function getMainClass()
    {
        switch ($this->type) {
            case 'ST':
                $mainClass = "st";
                break;
            case 'SEZ':
            case 'CdA':
                $mainClass = "se";
                break;
            case 'Projecte':
                $mainClass = "project";
                break;
            default:
                $mainClass = "school";
                break;
        }

        return $mainClass;
    }

    public function getKeyField()
    {
        switch ($this->type) {
            case 'ST':
                $keyField = $this->id;
                break;
            case 'SEZ':
            case 'CdA':
                $keyField = $this->codeid;
                break;
            case 'Projecte':
                $keyField = $this->codeid;
                break;
            default:
                $keyField = $this->slug;
        }

        return $keyField;
    }
}
