import * as VueRouter from 'vue-router';

import Home from '@/components/Home'
import Post from '@/components/Post'
import PostsByTag from '@/components/PostsByTag'
import Author from '@/components/Author'
import StyleGuide from '@/components/StyleGuide'

const routes = [
  { path: '/', component: Home },
  { path: '/post/:slug', component: Post},
  { path: '/tag/:tag', component: PostsByTag},
  { path: '/author/:username', component: Author},
  { path: '/styleguide', component: StyleGuide},
];
  
const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

export default router
