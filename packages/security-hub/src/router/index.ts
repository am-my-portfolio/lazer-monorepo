import { createRouter, createWebHistory } from 'vue-router';
import { primary_navigation, secondary_navigation, user_navigation } from '@/helpers/index';
import { applyRoleRouteGuard } from '@/auth/guards';
import { authGuard } from '@auth0/auth0-vue';

const NotAllowedPage = () => import('@/views/common/NotAllowed.vue');
const NotFoundPage = () => import('@/views/common/NotFound.vue');
const LandingPage = () => import('@/views/common/LandingPage.vue');

const static_routes = [
  {
    path: '/',
    // redirect: { path: '/dashboard' },
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/not-allowed',
    name: 'NotAllowedPage',
    component: NotAllowedPage,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFoundPage',
    component: NotFoundPage,
  },
];

const dynamic_routes = [];
for (const [, route] of [...primary_navigation, ...secondary_navigation].entries()) {
  const routeJson = {
    path: route.target,
    name: route.name,
    component: () => import(`@/views/${route.name.replace(/ /g, "")}.vue`),
    meta: {
      redirect: '/not-allowed',
      roles: route.roles,
    },
    beforeEnter: [authGuard, applyRoleRouteGuard],
  };
  dynamic_routes.push(routeJson);
}

for (const route of user_navigation) {
  const routeJson = {
    path: route.target,
    name: route.name,
    component: () => import(`@/views/${route.name.replace(/ /g, "")}.vue`),
    beforeEnter: [authGuard],
  };
  dynamic_routes.push(routeJson);
}

const routes = [...static_routes, ...dynamic_routes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
