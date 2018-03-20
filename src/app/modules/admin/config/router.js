import React from 'react';

// TERM
import TermIndexContainer from './../term/containers/TermIndexContainer';

// POST
import PostIndexContainer from './../post/containers/PostIndexContainer';

const ROUTER = [
    {
        path        : '/admin/term/index',
        component   : () => <TermIndexContainer/>,
    },
    {
        path        : '/admin/post/index',
        component   : () => <PostIndexContainer/>
    }
];

export default ROUTER ;