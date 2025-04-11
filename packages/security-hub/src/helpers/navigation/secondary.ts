import { Item, AllRoles, NavType } from '@/helpers';

export const secondary_navigation = [
  {
    name: 'Support',
    target: '/support',
    icon: 'fa-solid fa-headphones-simple', // headphones too
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.TEAM_ADMIN, AllRoles.TEAM_MEMBER],
    items: [],
  },
  {
    name: 'Settings',
    target: '/settings',
    icon: 'fa-solid fa-gear',
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.TEAM_ADMIN, AllRoles.CLIENT],
    items: [
      {
        name: 'Overview',
        target: '/settings',
        icon: '',
        current: true,
        items: [],
      },
      {
        name: 'Docs',
        target: '/settings',
        icon: '',
        current: false,
        items: [],
      },
      {
        name: 'Playground',
        target: '/settings',
        icon: '',
        current: false,
        items: [],
      },
      {
        name: 'Community',
        target: '/settings',
        icon: '',
        current: false,
        items: [],
      },
    ],
  },
  {
    type: NavType.SECONDARY,
    name: 'Tenants',
    target: '/tenants',
    icon: 'fa-solid fa-house-user', // house-user, building-user, users-gear, users-rectangle, users-viewfinder, users-between-line
    current: false,
    roles: [AllRoles.SUPER_ADMIN],
    items: [
      { name: 'Overview', current: true, icon: '', items: [] },
      { name: 'Onboard', current: true, icon: '', items: [] },
    ],
  },
];