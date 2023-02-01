import * as cuid from "cuid";
import { ICartItem } from "../Interfaces/ICartItem";
import { IShoppingCart } from "../Interfaces/IShoppingCart";

export class ShoppingCart implements IShoppingCart{

    id: string = cuid(); //cuid() generates a unique string value 
    items: ICartItem[]=[];


}