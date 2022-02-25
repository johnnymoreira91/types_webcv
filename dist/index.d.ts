declare module "UserLogin" {
    export interface UserLogin {
        name: string;
        password: string;
        email: string;
        uuid?: string;
        permissionLevel?: number;
        superUser: boolean;
    }
}
declare module "UserStore" {
    export interface UserStore {
        message: string;
        accessToken: string;
        user: string;
        permission: number;
        superUser: boolean;
        id: string;
        ip: string;
    }
}
