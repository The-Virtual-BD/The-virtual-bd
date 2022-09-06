<?php

function permissions($type) {
    $permissions = [
        // admin permissions
        'admin' => [
            'role-list',
            'role-create',
            'role-edit',
            'role-delete'
        ],
    
        // user permission
        'user' => [
            'user-dashboard'
        ],
    ];

    return $permissions[$type];
}
