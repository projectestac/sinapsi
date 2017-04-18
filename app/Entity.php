<?php

namespace Sinapsi;

use Illuminate\Database\Eloquent\Model;
use Sunra\PhpSimple\HtmlDomParser;

class Entity extends Model
{
    protected $fillable = ['codeid','name','slug','naturalesa','titularitat','address','cp','phone','fax','delegacio','comarca','municipi','utm_x','utm_y','geo_x','geo_y','nivells','email','web','type','agora_services','agora_managers','image','twitter','facebook','instagram','parent_id','active','info'];
    protected $dates = ['created_at', 'updated_at'];

    public function getLogo()
    {
        if ($this->image) {
            return $this->image;
        } else {
            try {
                $url = 'https://agora.xtec.cat/' . $this->slug;
                $dom = HtmlDomParser::str_get_html(file_get_contents($url));
                $this->image = $dom->find('#logo_entity')[0]->src;
                $this->save();
            } catch (\Exception $e) {
                $this->image = '';
            }
        }

        return $this->image;
    }

    public function saveLogo($file)
    {
        //TODO: control extension and size

        $folder = 'storage/public';
        $filename = 'entity_' . $this->id . "." . $file->getClientOriginalExtension();

        $file->move($folder, $filename);
        return $folder . "/" . $filename;
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
                $keyField = $this->id;
                break;
            default:
                $keyField = $this->slug;
        }

        return $keyField;
    }
}
