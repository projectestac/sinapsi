<?php

use Sunra\PhpSimple\HtmlDomParser;
use Illuminate\Support\Facades\Storage;
use Sinapsi\Tag;
use Sinapsi\Entity;
use Sinapsi\Sinapsi;
use Sinapsi\User;
use Sinapsi\Channel;
use Illuminate\Support\Facades\Session;
use Yajra\Datatables\Facades\Datatables;

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

function getSchoolsTable()
{
    $schools = Entity::select(['image', 'name', 'municipi','slug','phone','id','active','type'])->whereNotIn('type', ['Projecte'])->orderBy('name')->get();

    return Datatables::of($schools)->make();

}

function getProjectsTable()
{
    $projects =  Entity::selectRaw('entities.image, entities.name, e2.name AS parent_name, e2.municipi AS parent_municipi, entities.info AS info, entities.id, entities.active')
        ->leftjoin('entities AS e2', 'entities.parent_id', '=', 'e2.id')
        ->where('entities.type', 'Projecte')->orderBy('entities.name')->get();

    Session::put('projects', $projects);

    return Datatables::of($projects)->make();

}

function getSchools()
{
    $schools =  Entity::selectRaw('id AS ID, CONCAT(name," (",municipi,")") AS text')
        ->whereNotIn('type', ['SEZ','ST','CdA','CLIC','CREDA','Projecte'])->get();
    Session::put('schools', $schools);
    return  $schools;
}

function getTagByName($query)
{
    $tags =  Tag::selectRaw('id AS ID, name AS text')
        ->where('name','like','%'.$query.'%')
        ->get();
    return  $tags;
}
function getTagById($id)
{
    //TODO: first instead of get
    $tag =  Tag::selectRaw('id AS ID, name AS text')
        ->where('id',$id)
        ->get();

    return  $tag;
}

function getSchoolByName($query)
{
    $schools =  Entity::selectRaw('id AS ID, CONCAT(name," (",municipi,")") AS text')
        ->whereNotIn('type', ['SEZ','ST','CdA','CLIC','CREDA','Projecte'])
        ->where('name','like','%'.$query.'%')
        ->get();
    return  $schools;
}
function getSchoolById($id)
{
    //TODO: first instead of get
    $school =  Entity::selectRaw('id AS ID, CONCAT(name," (",municipi,")") AS text')
        ->whereNotIn('type', ['SEZ','ST','CdA','CLIC','CREDA','Projecte'])
        ->where('id',$id)
        ->get();

    return  $school;
}

function getProjects()
{
    //TODO: Parent name and city in text
    $projects =  Entity::selectRaw('channels.id AS ID, entities.name AS text')
        ->join('channels', 'channels.obj_id', '=', 'entities.id')
        ->where('entities.type', 'Projecte')
        ->get();
    Session::put('projects', $projects);
    return  $projects;
}
function getProjectByName($query)
{
    //TODO: Parent name and city in text
    $projects =  Entity::selectRaw('entities.id AS ID, entities.name AS text')
        //->join('channels', 'channels.obj_id', '=', 'entities.id')
        ->where('entities.type', 'Projecte')
        ->where('entities.name', 'like', '%'.$query.'%')
        ->get();
    return  $projects;
}

function getProjectById($id)
{
    //TODO: Parent name and city in text
    //TODO: first instead of get
    $project =  Entity::selectRaw('entities.id AS ID, entities.name AS text')
        //->join('channels', 'channels.obj_id', '=', 'entities.id')
        ->where('entities.type', 'Projecte')
        ->where('entities.id', $id)
        ->get();

    return  $project;
}

function getCities()
{
    $cities =  Entity::selectRaw('municipi AS ID, municipi AS text')->groupBy('municipi')->get();
    Session::put('cities', $cities);
    return  $cities;
}

function getCity($city)
{
    $cities =  Entity::selectRaw('municipi AS ID, municipi AS text')
                ->where('municipi','like','%'.$city.'%')
                ->groupBy('municipi')->get();
    return  $cities;
}

function getCounties()
{
    $counties =  Entity::distinct()->select('comarca')->orderBy('comarca')->get();
    return  $counties;
}

function getCenterTypes()
{
    $centerTypes =  Entity::distinct()->select('naturalesa')->whereRaw('naturalesa != ""')->orderBy('naturalesa')->get();
    return  $centerTypes;
}

function getTitularity()
{
    $centerTypes =  Entity::distinct()->select('titularitat')->orderBy('titularitat')->get();
    return  $centerTypes;
}

function getDelegations()
{
    $delegations =  Entity::distinct()->select('delegacio')->orderBy('delegacio')->get();
    return  $delegations;
}

function getEntitiesTypes()
{
    $delegations =  Entity::distinct()->select('type')->whereRaw('type != ""')->orderBy('type')->get();
    return  $delegations;
}

function getEntitiesParent()
{
    $entitiesParent =  Entity::selectRaw('id AS ID, name AS text')->orderBy('name')->get(); // TREURE EL LIMIT
    return  $entitiesParent;
}

function getEntity($entity_id){

    $entity = Entity::where('id', $entity_id)->get();
    return $entity;

}

function getChannelsEntities($entity_id){
    $channels = Channel::whereRaw('obj_id ='.$entity_id.' and active = 1')->get();
    return $channels;
}

function getUsers()
{
    return User::selectRaw('id, CONCAT(name," (",email,")") AS text')->get();
}

function getUserByName($query)
{
    $users =  User::selectRaw('users.id AS ID, 
                              CASE WHEN entities.name IS NOT NULL 
                              THEN CONCAT(users.name, " (", entities.name, ")" )
                              ELSE users.name 
                              END AS text'
        )
        ->leftjoin('entities','users.entity_id','entities.id')
        ->where('users.name', 'like', '%'.$query.'%')
        ->get();

    return  $users;
}

function getUserById($id)
{
    //TODO: first instead of get
    $user =  User::selectRaw('users.id AS ID, users.name AS text')
        ->where('users.id', $id)
        ->get();
    return  $user;
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

function slug($str)
{
    $slug = strtolower(trim(preg_replace('~[^0-9a-z]+~i', '-', html_entity_decode(preg_replace('~&([a-z]{1,2})(?:acute|cedil|circ|grave|lig|orn|ring|slash|th|tilde|uml);~i', '$1', htmlentities($str, ENT_QUOTES, 'UTF-8')), ENT_QUOTES, 'UTF-8')), '-'));
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

function is_mobile(){

    $useragent=$_SERVER['HTTP_USER_AGENT'];
    if(preg_match('/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i',$useragent)||preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i',substr($useragent,0,4))){
        //Session::put('is_mobile', 'true');
        return true;
    } else {
        //Session::put('is_mobile', 'false');
        return false;
    }
}
