import { AllRoles } from "@/auth";

// export const base_url = 'https://172.174.36.205';
export const base_url = 'http://localhost:3000';
// export const base_url = 'http://40.90.197.34:8001'


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

