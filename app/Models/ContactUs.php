<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactUs extends Model
{
    use HasFactory;

    protected $table = 'contactus';

    protected $fillable = [
        'address',
        'phone',
        'fax',
        'contact_person',
        'mobile',
        'email',
    ];
}
