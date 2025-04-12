import { Item } from "@/helpers";
import { AllRoles } from "@/auth"

export const primary_navigation: Item[] = [
  {
    name: 'Dashboard',
    target: '/dashboard',
    icon: 'fa-solid fa-chart-line', // chart-line, chart-pie, chart-area
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.TEAM_ADMIN],
    items: [
      {
        name: 'Overview',
        target: '/',
        current: true,

        icon: '',
        items: [],
      },
      {
        name: 'Models',
        target: '/',
        current: false,

        icon: '',
        items: [],
      },
      {
        name: 'Training',
        target: '/',
        current: false,

        icon: '',
        items: [],
      },
      {
        name: 'Inference',
        target: '/',
        current: false,

        icon: '',
        items: [],
      },
      {
        name: 'Evaluation',
        target: '/',
        current: false,

        icon: '',
        items: [],
      },
    ],
  },
  {
    name: 'AI Prompt',
    target: '/prompt',
    icon: 'fa-solid fa-brain',
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.TEAM_ADMIN, AllRoles.TEAM_MEMBER, AllRoles.CLIENT],
    items: [
      { name: 'Prompt', current: true, icon: '', items: [] },
      // { name: 'Chat', current: true, icon: '', items: [] },
      // { name: 'Audio', current: true, icon: '', items: [] },
      // { name: 'Image', current: true, icon: '', items: [] },
    ],
  },
  {
    name: 'Integrations',
    target: '/integrations',
    icon: 'fa-solid fa-plug',
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.TEAM_ADMIN],
    items: [
      { name: 'Overview', target: '/', current: true, icon: '', items: [] },
      { name: 'Featured', target: '/', current: false, icon: '', items: [] },
      { name: 'New', target: '/', current: false, icon: '', items: [] },
    ],
  },
  {
    name: 'Compliance',
    target: '/compliance',
    icon: 'fa-solid fa-gavel', // clipboard-check, gavel
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.TEAM_ADMIN],
    items: [
      { name: 'Overview', target: '/', current: true, icon: '', items: [] },
      { name: 'Data Policy', target: '/', current: false, icon: '', items: [] },
      {
        name: 'Model Interactions',
        target: '/',
        current: false,

        icon: '',
        items: [],
      },
      {
        name: 'Configuration',
        target: '/',
        current: false,
        icon: '',
        items: [],
      },
      { name: 'Requests', target: '/', current: false, icon: '', items: [] },
    ],
  },
  {
    name: 'Users',
    target: '/users',
    icon: 'fa-solid fa-users',
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.TEAM_ADMIN],
    items: [
      { name: 'Overview', target: '/', current: true, icon: '', items: [] },
      { name: 'Roles', target: '/', current: false, icon: '', items: [] },
      { name: 'Groups', target: '/', current: false, icon: '', items: [] },
      { name: 'Api Keys', target: '/', current: false, icon: '', items: [] },
      { name: 'Policies', target: '/', current: false, icon: '', items: [] },
      {
        name: 'Activity Logs',
        target: '/',
        current: false,

        icon: '',
        items: [],
      },
      { name: 'Invite', target: '/', current: false, icon: '', items: [] },
    ],
  },
  {
    name: 'Notifications',
    target: '/notifications',
    icon: 'fa-solid fa-bell',
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.TEAM_ADMIN],
    items: [
      { name: 'Overview', target: '/', current: true, icon: '', items: [] },
      { name: 'Incidents', target: '/', current: false, icon: '', items: [] },
      { name: 'Alerts', target: '/', current: false, icon: '', items: [] },
      {
        name: 'Notifications',
        target: '/',
        current: false,

        icon: '',
        items: [],
      },
    ],
  },
  {
    name: 'Data Management',
    target: '/data-management',
    icon: 'fa-solid fa-database',
    current: false,
    roles: [AllRoles.SUPER_ADMIN, AllRoles.TEAM_ADMIN],
    items: [],
  },
];
