<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\JiffyeUsers;
use Response;

class JiffyeUsersController extends Controller
{
    //

    public function show()
    {
        
        return view('lease.lease', [
            'all_users' => JiffyeUsers::all()
        ]);
        
    }

    /**
     * JiffyeUsers::selectRaw('jiffy_id as user_id, jf_name as first_name etc')
     * jiffy_id`, `jf_name`, `jl_name`, `gender`, `email`, `phone_number`, `password`, `profile_photo`, `banna_photo`, `wall_photo`, `date_join`, `time_join`, `ty_ju`, `comp_industry`, `c_by_u`, `c_desc`, `c_ty`, `user_name`, `juser_verified`, `emial_confirm`, `rigional_add`, `u_latitude`, `u_longitude`, `user_status`, `login_stat
     */
    public function load_users()
    { 
        $jiffye_users= JiffyeUsers::where('user_status', 1)
            ->orderBy('jiffy_id', 'DESC')
            ->take(5)
            ->get();
        if($jiffye_users){
        
            return response()->json([
                'data' => $jiffye_users, 
                'status' => 201,
                'message'=>' Success '
            ]);
        
        }else{
            return response()->json([
                'data'=>'null',
                'status' => 404,
                'message' => 'No record fount'
                
            ]);
        }
        
        
    }

}
