import { AllRoles } from "@/auth";

export enum NavType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
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

