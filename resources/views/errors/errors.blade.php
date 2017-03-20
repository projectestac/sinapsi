@if (! $errors->isEmpty())
    <div class="alert alert-danger">
        <p><strong>{{ trans('messages.oops') }}</strong> {{ trans('messages.please_correct_the_following_errors') }}</p>
        <ul>
            @foreach($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif