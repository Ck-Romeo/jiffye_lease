<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SubscribersController;
use App\Http\Controllers\JiffyeUsersController;
use App\Models\JiffyeUsers;
use Illuminate\Support\Facades\View;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/users', function () {
    return view('users');
});

// Route::get('/lease', function () {
//     return view('lease.lease');
// });
Route::get('/newLease', function () {
    return View::make("lease.newLease", ['load_users'=>JiffyeUsersController::class, 'load_users']);
    // ->with('value', 'l')
    // ->render();
});
Route::get('/getUsers', [JiffyeUsersController::class, 'load_users']);
Route::get('/lease', [SubscribersController::class, 'show']);


