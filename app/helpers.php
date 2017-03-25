<?php

use Sunra\PhpSimple\HtmlDomParser;
use Illuminate\Support\Facades\Storage;
use Sinapsi\Tag;
use Sinapsi\Entity;
use Sinapsi\Sinapsi;
use Sinapsi\User;
use Sinapsi\Channel;
use Illuminate\Support\Facades\Session;

function getSSEE()
{
    /*if (Session::has('ssee')){
        return Session::get('ssee');
    }*/

    $ssee =  Entity::select('codeid AS ID', 'name AS text')->where('type', 'SEZ')->get();
    Session::put('ssee', $ssee);
    return  $ssee;
}

function getTags()
{
    $tags =  Tag::select('id AS ID', 'name AS text')->get();
    Cache::put('tags', $tags, 5);
    return  $tags;
}

function getChannels()
{
    return Channel::select('channels.id AS ID', 'entities.name AS text')
                ->join('entities', 'channels.obj_id', '=', 'entities.id')
                ->get();
}

function getSchools()
{
    $schools =  Entity::selectRaw('id AS ID, CONCAT(name," (",location,")") AS text')
        ->whereNotIn('type', ['SEZ','ST','CdA','CLIC','CREDA','Projecte'])->get();
    Session::put('schools', $schools);
    return  $schools;
}

function getProjects()
{
    $projects =  Entity::selectRaw('channels.id AS ID, CONCAT(name," (",location,")") AS text')
        ->join('channels', 'channels.obj_id', '=', 'entities.id')
        ->where('entities.type', 'Projecte')->get();
    Session::put('projects', $projects);
    return  $projects;
}


function getCities()
{
    $cities =  Entity::selectRaw('location AS ID, location AS text')->groupBy('location')->get();
    Session::put('cities', $cities);
    return  $cities;
}

function getUsers()
{
    return User::selectRaw('id, CONCAT(name," (",email,")") AS text')->get();
}

function getDstSinapsi($user_id)
{
    $sinapsis = Sinapsi::selectRaw('sinapsis.id, CONCAT(sinapsis.name," (",sinapsis.slug,")") AS text')
                    ->join('user_abilities', 'sinapsis.id', '=', 'user_abilities.scope_id')
                    ->where('sinapsis.type', 'manual')
                    ->where('scope', 'sinapsi')
                    ->where('user_abilities.ability', 'posts_manage')
                    ->where('user_abilities.user_id', $user_id)
                    ->get();
                
    return $sinapsis;
}


/**
 * Original from Press-this WordPress feature
 * https://github.com/WordPress/WordPress/blob/1947f4d17cbfed49972e64fdd0b51998fd24c150/wp-admin/includes/class-wp-press-this.php#L413
 */

function is_candidate_img($src)
{
    if (preg_match('!/ad[sx]?/!i', $src)) {
        // Ads
        return '';
    } elseif (preg_match('!(/share-?this[^.]+?\.[a-z0-9]{3,4})(\?.*)?$!i', $src)) {
        // Share-this type button
        return '';
    } elseif (preg_match('!/(spinner|loading|spacer|blank|rss)\.(gif|jpg|png)!i', $src)) {
        // Loaders, spinners, spacers
        return '';
    } elseif (preg_match('!/([^./]+[-_])?(spinner|loading|spacer|blank)s?([-_][^./]+)?\.[a-z0-9]{3,4}!i', $src)) {
        // Fancy loaders, spinners, spacers
        return '';
    } elseif (preg_match('!([^./]+[-_])?thumb[^.]*\.(gif|jpg|png)$!i', $src)) {
        // Thumbnails, too small, usually irrelevant to context
        return '';
    } elseif (false !== stripos($src, '/wp-includes/')) {
        // Classic WordPress interface images
        return '';
    } elseif (preg_match('![^\d]\d{1,2}x\d+\.(gif|jpg|png)$!i', $src)) {
        // Most often tiny buttons/thumbs (< 100px wide)
        return '';
    } elseif (preg_match('!/pixel\.(mathtag|quantserve)\.com!i', $src)) {
        // See mathtag.com and https://www.quantcast.com/how-we-do-it/iab-standard-measurement/how-we-collect-data/
        return '';
    } elseif (preg_match('!/[gb]\.gif(\?.+)?$!i', $src)) {
        // WordPress.com stats gif
        return '';
    }
    return $src;
}

function set_global_url($src, $url)
{
    if (substr($src, 0, 4) != "http") {
        return 'http://xtec.gencat.cat'.$src;
    } else {
        return $src;
    }
}

function parse_webpage($url)
{
    $dom = HtmlDomParser::str_get_html(file_get_contents($url));
    $title = $dom->find('title', 0)->plaintext;
    $images = $dom->find('img');

    $i=0;
    foreach ($images as $img) {
        if (is_candidate_img($img->src)) {
            $thumbs[]=set_global_url($img->src, $url);
        }
        $i++;
        if ($i>5) {
            break;
        }
    }

    $tags="";

    $metas = $dom->find('meta');

    foreach ($metas as $meta) {
        if ($meta->property == 'og:description' and strlen($meta->content)>140) {
            $description = $meta->content;
        } elseif ($meta->name == 'keywords') {
            $tags = $meta->content;
        }
    }

    if (empty($description)) {
        $paragraphs = $dom->find('p');

        foreach ($paragraphs as $p) {
            if (is_string($p->plaintext) and strlen($p->plaintext)>140) {
                $description = $p->plaintext;
                break;
            }
        }
    }

    return array($url, $title,$thumbs,$description,$tags);
}

//TODO: Generate thumbnail. Avoid small size picture or icon. See above
function thumb($content)
{
    $dom = HtmlDomParser::str_get_html($content);
    $elems = $dom->find("img");

    if (count($elems)) {
        // Necessary to avoid "Mixed content"
        return preg_replace("/^http:/i", "https:", $elems[0]->src);
    }

    return '';
}
/*
 * prepare_content
 * delete thumbnail in content
 */
function prepare_content($content)
{
    $clean_content = preg_replace('/<img width="150" height="150" src="(.*)" class="attachment-thumbnail size-thumbnail wp-post-image" alt="(.*)">/', "", $content, 1);
    return $clean_content;
}


/*TODO: Generate thumbnail
function thumb($content,$post_id)
{
    $dom = HtmlDomParser::str_get_html($content);
    $elems = $dom->find("img");

    if ( count ($elems) ){
        $img = Image::make($elems[0]->src)->resize(300, 200)->save('storage/public/thumbs/'.$post_id.'.png');
        return $elems[0]->src;
    } else {
        return "http://tafanodes.skills.cat/images/nodescolorp.png";
    }

}*/

function saveFile($file, $post_id="")
{
    //TODO: control extension and size
    $filename = $file->getClientOriginalName();

    if ($post_id) {
        $folder = 'storage/public/'.$post_id ;
    } else {
        $folder = 'storage/public';
    }

    $file->move($folder, $filename);
    return $folder ."/". $filename;
}

function moveImagesToPostFolder($post)
{
    $new_content = $post->content;
    $dom = HtmlDomParser::str_get_html($post->content);
    $elems = $dom->find("img");

    foreach ($elems as $elem) {
        $filename = str_replace('storage/public/', '', $elem->src);
        Storage::move('/public/'.$filename, '/public/'.$post->id.'/'.$filename);
        $new_content = str_replace($elem->src, '/storage/public/'.$post->id.'/'.$filename, $new_content);
    }
    return $new_content;
}

/** * close all open xhtml tags at the end of the string
 * * @param string $html
 * @return string
 * @author Milian <mail@mili.de>
 */
function close_tags($html)
{
    #put all opened tags into an array
    preg_match_all('#<([a-z]+)(?: .*)?(?<![/|/ ])>#iU', $html, $result);
    $openedtags = $result[1];   #put all closed tags into an array
    preg_match_all('#</([a-z]+)>#iU', $html, $result);
    $closedtags = $result[1];
    $len_opened = count($openedtags);

    # all tags are closed

    if (count($closedtags) == $len_opened) {
        return $html;
    }

    $openedtags = array_reverse($openedtags);

    # close tags
    for ($i=0; $i < $len_opened; $i++) {
        if (!in_array($openedtags[$i], $closedtags)) {
            $html .= '</'.$openedtags[$i].'>';
        } else {
            unset($closedtags[array_search($openedtags[$i], $closedtags)]);
        }
    }
    return $html;
}

function slug($tag)
{
    $slug = strtolower(trim(preg_replace('~[^0-9a-z]+~i', '-', html_entity_decode(preg_replace('~&([a-z]{1,2})(?:acute|cedil|circ|grave|lig|orn|ring|slash|th|tilde|uml);~i', '$1', htmlentities($tag, ENT_QUOTES, 'UTF-8')), ENT_QUOTES, 'UTF-8')), '-'));
    return $slug;
}

function uniformTag($tag)
{
    $tag = strtoupper(
            trim(
                preg_replace(
                '~&([a-z]{1,2})(?:acute|cedil|circ|grave|lig|orn|ring|slash|th|tilde|uml|quot|amp);~i',
                '$1', htmlentities($tag, ENT_NOQUOTES, 'UTF-8'))));
    return $tag;
}


/**
 * Compose params form request into querystring format
 **/

function getQueryString($request)
{

    if ($request->isMethod('post')) {
        $querystring ="";
        $exclude_fields = [
            'sinapsi_id',
            '_token',
            'name',
            'description',
            'slug',
            'serveis_educatius',
            'schools',
            'sns_logo',
            'parent_id',
            'title',
            'content',
            'block_type',
            'url',
            'admins',
            'blocks',
            'type',
            'postview',
            'parent_sinapsi'
        ];
        $params = $request->except($exclude_fields);

        foreach ($params as $key => $value) {
            if (!empty($value)) {
                if (is_array($value)) {
                    $params[$key] = implode(",", $value);
                }
                $querystring .= ($querystring) ? "&" : "";
                $querystring .= $key."=".$params[$key];
            }
        }
        
        return $querystring;
    } else {
        return $request->fullUrl();
    }
}


function sns_merge_params($arr_base, $arr)
{

    //if (count($arr)>1) {

        foreach ($arr as $key => $arr_values) {
            switch (true) {
                case empty($arr_base[$key]):

                case $key=='o':
                    // The 'o' (orderBy) parameter is a simple parameter. No concatenate with others values.
                    $arr_base[$key] = $arr_values;
                    break;
                case $key=='q':
                    // sinapsi q (terms) works in "and" mode. In full-text search "and" mode use the "+" sign
                    $param_db = explode(",", $arr_base['q']);
                    $from_db = implode(" ", array_map("sns_quote", $param_db));
                    $param_web = explode(",", $arr_values);
                    $from_web = implode(" ", array_map("sns_quote", $param_web));
                    $arr_base['q'] = "+(".$from_db.") +(".$from_web.")";

                    break;

                default:
                    $arr_base[$key] .= ",".$arr_values;
            }
        }
    //}

    return $arr_base;
}

function sns_quote($term)
{
    switch (true) {
        case (substr($term, 0, 1) === "+"):
        case (substr($term, 0, 1) === "-"):
        case (strpos($term, '*')!== false):
            $ret = $term;
            break;
        default:
            $ret =  '"'.$term.'"';
    }
    return $ret;
}

/**
 *  Similar to parse_str but without especial signs (like +) truncation
 */

function sns_parse_str($querystring)
{
    $p = explode("&", $querystring);

    foreach ($p as $param) {
        list($k, $v) = explode("=", "$param=");
        $params[$k] = $v;
    }

    return $params;
}
