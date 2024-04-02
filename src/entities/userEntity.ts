import { Order } from "./orderEntity";

export interface User {
    id: number;
    name: string;
    point: number;
    email?: string | null;
    address?: string | null;
    password?: string | null;
    createdAt: Date;
    updatedAt: Date;
    orders?: Order[];
}
