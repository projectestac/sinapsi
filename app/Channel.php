<?php

namespace Sinapsi;

use Illuminate\Database\Eloquent\Model;
use SimplePie;

class Channel extends Model
{
    protected $fillable = ['type', 'obj_id', 'rss'];

    /**
     *
     * Get description from a feed
     *
     * @return array
     */
    // NOTE: not used
    public function fetchGeneralInfo()
    {
        $feed = new SimplePie();
        $feed->set_feed_url($this->rss);
        $feed->enable_cache(true);
        $feed->set_cache_location(storage_path() . '/simplepie/cache');
        $feed->set_cache_duration(60 * 60 * 12);
        $feed->set_output_encoding('utf-8');
        $feed->init();

        $info = array("description" => $feed->get_description());

        return $info;
    }

    /**
     * Get post by url
     *
     * @param $url
     * @return \Illuminate\Support\Collection
     */
    
    public function fetchPost($url)
    {
        try {
            $feed = new SimplePie();
            $feed->set_feed_url($url . '/feed/?withoutcomments=1');
            $feed->enable_cache(true);
            $feed->set_cache_location(storage_path() . '/simplepie/cache');
            $feed->set_cache_duration(60 * 60 * 12);
            $feed->set_output_encoding('utf-8');
            $feed->init();

            $item = $feed->get_items()[0];

            $content = $item->get_description() . $item->get_content();
            $thumb = ($content) ? thumb($content) : '';

            $pub_date = $item->get_date('Y-m-d G:i:s') ? $item->get_date('Y-m-d G:i:s') : date('Y-m-d G:i:s');

            $tags = collect([]);
            $str_tags = '';

            if ($item->get_categories()) {
                foreach ($item->get_categories() as $category) {
                    $tags->push(
                        ['name' => uniformTag($category->get_label()),
                            'slug' => slug($category->get_label())
                        ]
                    );
                }
                $str_tags = $tags->implode('name', ',');
            }

            $post = [
                'title' => $item->get_title(),
                'link' => $item->get_link(),
                'permalink' => $item->get_id(),
                'description' => $item->get_description() ? $item->get_description() : '',
                'content' => $item->get_content() ? $item->get_content() : '',
                'author' => '',//$item->get_author()->get_name() ? $item->get_author()->get_name() : '',
                'thumb' => $thumb,
                'channel_id' => $this->id,
                'pub_date' => $pub_date,
                'tags' => $tags,
                'str_tags' => $str_tags,
            ];
            
            return $post;
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    /**
     * Get Posts and tags from feed
     *
     * @return \Illuminate\Support\Collection
     */

    public function fetchPosts()
    {
        $feed = new SimplePie();
        $feed->set_feed_url($this->rss);
        $feed->strip_htmltags(true);
        $feed->enable_cache(true);
        $feed->set_cache_location(storage_path() . '/simplepie/cache');
        $feed->set_cache_duration(60 * 60 * 12);
        $feed->set_output_encoding('utf-8');
        $feed->init();

        $posts = collect([]);


        foreach ($feed->get_items() as $item) {

            if (starts_with($item->get_title(),"Protegit:")){
                continue;
            }

            $str_tags = '';
            $tags = collect([]);

            $content = $item->get_description() . $item->get_content();
            $thumb = ($content) ? thumb($content) : '';
            $content = prepare_content($item->get_content());

            $pub_date = $item->get_date('Y-m-d G:i:s') ? $item->get_date('Y-m-d G:i:s') : date('Y-m-d G:i:s');

            if ($item->get_categories()) {
                foreach ($item->get_categories() as $category) {
                    $tags->push(
                        ['name' => uniformTag($category->get_label()),
                         'slug' => slug($category->get_label())
                        ]
                    );
                }
                $str_tags = $tags->implode('name', ',');
            }

            $post = [
                'title' => $item->get_title(),
                'link' => $item->get_link(),
                'permalink' => $item->get_id(),
                'description' => $item->get_description() ? $item->get_description() : '',
                'content' => $content ?  $content : '',
                'author' => '',//$item->get_author()->get_name() ? $item->get_author()->get_name() : '',
                'thumb' => $thumb,
                'channel_id' => $this->id,
                'pub_date' => $pub_date,
                'tags' => $tags,
                'str_tags' => $str_tags,
            ];

            $posts->push($post);
        }

        return $posts;
    }
}
