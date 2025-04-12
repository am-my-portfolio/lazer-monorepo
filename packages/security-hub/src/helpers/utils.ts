import { RoleIds, AllRoles } from '@/auth';

export const getRoleId = (role: AllRoles) => {
  console.debug(`[getRoleId]`);
  const key = Object.keys(AllRoles)[Object.values(AllRoles).indexOf(role)];
  const role_id = RoleIds[key];
  return role_id;
};
