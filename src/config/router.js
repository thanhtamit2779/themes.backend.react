import React from 'react';

// TERM
import TermIndexContainer from './../app/term/containers/TermIndexContainer';
import TermAddContainer from './../app/term/containers/TermAddContainer';

// POST
import PostIndexContainer from './../app/post/containers/PostIndexContainer';

const ROUTER = [
    {
        path        : '/term/index',
        component   : () => <TermIndexContainer/>,
    },
    {
        path        : '/term/add',
        component   : () => <TermAddContainer/>,
    },
    {
        path        : '/post/index',
        component   : () => <PostIndexContainer/>,
    }
];

export default ROUTER ;