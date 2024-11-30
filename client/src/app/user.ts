export type IUserPayload = {
    email?:string  | null;
    name?:string | null;
}

export type IUser = {
    email:string;
    name:string;
    created_at: string;
    id:number
}