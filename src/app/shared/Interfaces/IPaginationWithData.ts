import { IProduct } from "./IProduct";

export interface IPaginationWithData{
    count: number,
    pageSize: number,
    pageNumber: number,
    data:IProduct[]
}