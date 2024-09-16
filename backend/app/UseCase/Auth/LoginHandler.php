<?php

namespace App\UseCase\Auth;

use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Hash;

class LoginHandler
{
    /**
     * @throws Exception
     */
    public function handle(string $email, string $password): array
    {
        $user = User::where('email', $email)->first();

        if (!$user || !Hash::check( $password, $user->password)) {
            throw new Exception('Пользователь не найден');
        }

        $user->tokens()->delete();
        $token = $user->createToken('login')->plainTextToken;

        return [
            'access_token' => $token,
            'refresh_token' => '',
            'roles' => ''
        ];
    }
}
