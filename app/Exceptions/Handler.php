<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\HttpException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that should not be reported.
     *
     * @var array
     */
    protected $dontReport = [
        \Illuminate\Auth\AuthenticationException::class,
        \Illuminate\Auth\Access\AuthorizationException::class,
        \Symfony\Component\HttpKernel\Exception\HttpException::class,
        \Illuminate\Database\Eloquent\ModelNotFoundException::class,
        \Illuminate\Session\TokenMismatchException::class,
        \Illuminate\Validation\ValidationException::class,
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        if ($request->wantsJson() === false)
            return parent::render($request, $exception);
        
        // Return a JSON error object
        
        $error = [
            'status' => 500,
            'message' => 'Unknown'
        ];
        
        if ($exception instanceof HttpException) {
            $error['status'] = $exception->getStatusCode();
            $error['message'] = $exception->getMessage();
        } else if ($exception instanceof AuthorizationException) {
            $error['status'] = 403;
            $error['message'] = $exception->getMessage();
        } else if ($exception instanceof AuthenticationException) {
            $error['status'] = 401;
            $error['message'] = $exception->getMessage();
        } else if ($exception instanceof ModelNotFoundException) {
            $error['status'] = 404;
            $error['message'] = 'Not Found';
        } else if ($exception instanceof ValidationException) {
            $error['status'] = 422;
            $error['message'] = 'Unprocessable Entity';
            $error['errors'] = $exception->validator->errors();
        }
        
        return response()->json($error, $error['status']);
    }

    /**
     * Convert an authentication exception into an unauthenticated response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Illuminate\Auth\AuthenticationException  $exception
     * @return \Illuminate\Http\Response
     */
    protected function unauthenticated($request, AuthenticationException $exception)
    {
        if ($request->expectsJson()) {
            return response()->json(['error' => 'Unauthenticated.'], 401);
        }

        return redirect()->guest(route('login'));
    }
}
