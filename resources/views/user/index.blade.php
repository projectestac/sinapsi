@extends('layout')
@section('content')

    <br>
    <div class="container">

        <div class="well">

            <div class="media">
                <div class="media-left media-top">
                    <a href="#">
                        <img class="thumbnail avatar" src="{{ $user->avatar }}" alt="foto">
                    </a>
                </div>
                <div class="media-body">
                    <h3 class="media-heading">{{ $user->name }}</h3>
                    <ul>
                        @if ($user->entity_name)
                            <li>Lloc de treball: {{ $user->entity_name }} ( {{ $user->entity_location }} )
                        @endif

                        {{--@if ($user->email)
                            <li>Correu electrònic: {{ $user->email }}
                        @endif--}}

                        @if ($user->description)
                            <li>{!! $user->description !!}
                        @endif

                    </ul>

                    @if ( Auth::check() and (Auth()->user()->id == $user->id OR Auth()->user()->isAdmin()) )
                        <a href="{{url('user/'.$user->id.'/edit')}}">Edita</a>
                    @endif

                </div>
            </div>

        </div>

        <div class="container">

            <ul class="nav nav-tabs">
                <li class="active"><a data-toggle="tab" href="#favorits">Favorits</a></li>
                <li><a data-toggle="tab" href="#votats">Votats</a></li>
                {{--<li><a data-toggle="tab" href="#comentats">Comentats</a></li>--}}
                {{--<li><a data-toggle="tab" href="#creats">Creats</a></li>--}}
            </ul>

            <div class="tab-content">
                <div id="favorits" class="tab-pane fade in active">
                    <h3>Favorits</h3>
                    <table class="table">
                        <thead>
                        <th>Article</th>
                        <th>Font</th>
                        <th>Localitat</th>
                        <th>Data</th>
                        </thead>
                        @foreach ( $posts_favorites as $post )
                            <tr>
                                <td><a href="{{ url('post') }}/{{ $post->id }}">{{ $post->title }}</a></td>
                                <td></td>
                                <td></td>
                                <td>{{ $post->post_favorite_created_at }}</td>
                            </tr>
                        @endforeach

                    </table>
                </div>
                {{--
                <div id="comentats" class="tab-pane fade">
                    <h3>Comentaris</h3>
                    <table class="table">
                        <thead>
                        <th>Article</th>
                        <th>Comentari</th>
                        <th>Font</th>
                        <th>Localitat</th>
                        <th>Data</th>
                        </thead>
                        @foreach ( $posts_comments as $comment )
                            <tr>
                                <td><a href="{{ url('post') }}/{{ $comment->id }}">{{ $comment->title }}</a> </td>
                                <td>{{ $comment->comment }}</td>
                                <td><a href="{{ url($comment->source_url) }}">{{ $comment->source_name }}</a></td>
                                <td>{{ $comment->source_location }}</td>
                                <td>{{ $comment->comment_created_at }}</td>
                            </tr>
                        @endforeach
                    </table>
                </div>--}}
                <div id="votats" class="tab-pane fade">
                    <h3>Votats</h3>
                    <table class="table">
                        <thead>
                        <th>Article</th>
                        <th>Font</th>
                        <th>Localitat</th>
                        <th>Data</th>
                        </thead>
                        @foreach ( $posts_liked as $post )
                            <tr>
                                <td><a href="{{ url('post') }}/{{ $post->id }}">{{ $post->title }}</a></td>
                                <td></td>
                                <td></td>
                                <td>{{ $post->post_vote_created_at }}</td>
                            </tr>
                        @endforeach
                    </table>
                </div>
                {{--
                <div id="creats" class="tab-pane fade">
                    <h3>Creats</h3>
                    <table class="table">
                        <thead>
                        <th>Article</th>
                        <th>Descripció breu</th>
                        <th>Data</th>
                        </thead>
                        @foreach ( $user->posts() as $post )
                            <tr>
                                <td>
                                    <a href="{{ url('post') }}/{{ $post->id }}">{{ $post->title }}</a>
                                </td>
                                <td>
                                    @if ($post->thumb)
                                        <img width='150px' src="{{ url ($post->thumb) }}">
                                    @endif
                                    {!!  strip_tags ( $post->description,'<a>' ) !!}
                                </td>
                                <td>{{ $post->created_at }}</td>
                            </tr>
                        @endforeach
                    </table>
                </div> --}}
            </div>
        </div>
    </div>
@stop

