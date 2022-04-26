<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subscribers;
use App\Models\JiffyeUsers;

class SubscribersController extends Controller
{
    //show all subscriptions
    //subcriptions are also used for leasing and hiring

    /**
     * where('active', 1)
               ->orderBy('name')
               ->take(10)
               ->get();
     */
    public function show()
    {
        
        return view('lease.lease', [
            'subscribers' => Subscribers::all(),
            'all_users' => JiffyeUsers::all(),
            'AllUsers' => JiffyeUsers::all()
        ]);
    }
    
    public function users()
    {
        return view('dialogue-box-properties', [ 
            'allUsers' => JiffyeUsers::all()
        ]);
    }
}
