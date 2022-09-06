<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Role create
        $admin = Role::create(['name' => 'admin']);
        $user = Role::create(['name' => 'user']);

        // Give permission to role
        $admin->syncPermissions(permissions('admin'));
        $user->syncPermissions(permissions('user'));
    }
}
