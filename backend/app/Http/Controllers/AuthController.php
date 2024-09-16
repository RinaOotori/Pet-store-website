<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\UseCase\Auth\LoginHandler;
use Exception;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function login(LoginRequest $request, LoginHandler $handler): array|Response
    {
        try {
            $result = $handler->handle($request->get('email'), $request->get('password'));
            return $this->success($result);
        } catch (Exception $e) {
            return response(['message' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }
}
