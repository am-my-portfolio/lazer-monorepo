export enum NavType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum Permissions {
  READ = 'read',
  WRITE = 'write',
}

export enum SpecialRoles {
  SUPER_ADMIN = 'Super Admin',
}

export enum GeneralRoles {
  TEAM_ADMIN = 'Team Admin',
  TEAM_MEMBER = 'Team Member',
  CLIENT = 'Client',
}

export type AllRoles = SpecialRoles | GeneralRoles;

export const AllRoles = {
  ...SpecialRoles,
  ...GeneralRoles,
};

export enum RoleIds {
  TEAM_ADMIN = 'rol_LSeHE4MuAfZlutXg',
  TEAM_MEMBER = 'rol_3RmEpEgOS8onPsXt',
  CLIENT = 'rol_ahDgtPUuFL1yvnfv',
}

export interface ICreateUser {
  given_name: string;
  family_name: string;
  email: string;
  user_role: AllRoles;
}

export interface ISendPortalInviteRequest {
  email: string;
  client_id: string;
  auth0_org_id: string;
}

export type Item = {
  name: string;
  target?: string;
  description?: string;
  page?: string;
  type?: NavType;
  icon: string;
  current: boolean;
  roles?: AllRoles[];
  items: Item[];
};

export interface IAuth0Colors {
  primary: string;
  page_background: string;
}

export interface IAuth0Branding {
  logo_url: string;
  colors: IAuth0Colors;
}

export interface IAuth0ConnectionDetails {
  name: string;
  strategy: string;
}

export interface IAuth0Connections {
  connection_id: string;
  assign_membership_on_login: boolean;
  connection?: IAuth0ConnectionDetails[];
}

export interface IAuth0Organization {
  name: string;
  display_name: string;
  branding?: IAuth0Branding;
  metadata?: Record<string, string>;
  enabled_connections: IAuth0Connections[];
}

export interface IAuth0OrganizationResponse {
  id: string;
  display_name: string;
  name: string;
}
