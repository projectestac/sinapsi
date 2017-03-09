<?php

namespace Sinapsi\Repositories;

use Sinapsi\Tag;
use Sinapsi\TagAlias;

class TagRepository
{
    /**
     *  Add a new tag or return a similiar tag. Also delete cache tags list.
     *
     * @param array $tag
     * @return Tag
     */

    public function newOrAlias($mixed_tag)
    {
        if (is_array($mixed_tag)) {
            $tag = $this->getAlias($mixed_tag);

            $__tag = Tag::firstOrCreate(
                ['slug' => $tag['slug']],
                ['name' => $tag['name']]
            );
        } else {

            // An existent tag
            if (is_numeric($mixed_tag)) {
                $tag_id = $mixed_tag;
                $__tag = Tag::findOrFail($tag_id);
            } // a new tag (alphanumeric string)
            else {
                $tag = $this->getAlias([
                    'name'=>$mixed_tag,
                    'slug'=>slug($mixed_tag)
                ]);

                $__tag = Tag::firstOrCreate(
                    ['slug' => $tag['slug']],
                    ['name' => $tag['name']]
                );
            }
        }
        cache()->pull('tags');

        return $__tag;
    }

    public function getAlias($tag)
    {
        $tags_alias = TagAlias::all();

        foreach ($tags_alias as $tag_alias) {
            if (preg_match('/'.$tag_alias['slug'].'/', $tag['slug'])) {
                return ['slug' => $tag_alias['slug_alias'], 'name'=>$tag_alias['name_alias'] ];
            }
        }

        return $tag;
    }
}
