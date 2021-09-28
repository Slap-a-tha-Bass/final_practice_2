import { Request } from "express"

export interface mySQLResponse {
    affectedRows: number,
    insertId: number,
    sqlMessage: string
}
export interface Books {
    id: number,
    title: string,
    author: string,
    price: number,
    _created: Date
}
export interface Users {
    id?: number,
    name?: string,
    email?: string,
    password?: string,
    role?: string,
    _created?: Date
}
export interface Categories {
    id: number,
    name: string
}
export interface ReqUsers extends Request {
    user?: Users
}