import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ICartItem } from "../Interfaces/ICartItem";
import { IOrderSummary } from "../Interfaces/IOrderSummary";
import { IProduct } from "../Interfaces/IProduct";
import { ShoppingCart } from "../Models/ShoppingCart";

@Injectable()
export class ShoppingCartService {

    baseUrl = "https://localhost:44330/api/";
   
    constructor(private http:HttpClient) {
  
    }

//shoppingCart Observable
private _shoppingCartObservable = new BehaviorSubject<ShoppingCart | null>(null);
public shoppingCartObservable$ = this._shoppingCartObservable.asObservable();

//orderSummaryObservable
private _orderSummaryObservable = new BehaviorSubject<IOrderSummary | null>(null);
public orderSummaryObservable$ = this._orderSummaryObservable .asObservable();


getShoppingCart(shoppingCartId:string){
this.http.get<ShoppingCart>(this.baseUrl+"GetShoppingCartById?id="+shoppingCartId).subscribe(
{next : shoppingCart =>{this._shoppingCartObservable.next(shoppingCart)
this.setOrderSummary(shoppingCart);
} }
)}

setShoppingCart(shoppingCart:ShoppingCart){
    this.http.post<ShoppingCart>(this.baseUrl+"UpdateShoppingCart", shoppingCart).subscribe(
    {next : shoppingCart => {this._shoppingCartObservable.next(shoppingCart)
        this.setOrderSummary(shoppingCart);
    }
    }
    )}
    
getCurrentShoppingCart(){
    return this._shoppingCartObservable.value; //.value returns the last/current value of the Behavioral Event 
}


 addItemToCart(item: IProduct | ICartItem , qty:number=1){
   
    if ((item as ICartItem).brand ===undefined)
           item = this.mapProductToCartItem( (item as IProduct) );
        
    var shoppingCart = this.getCurrentShoppingCart();

        if(shoppingCart==null){
            shoppingCart = this.createShoppingCart();
        }

        shoppingCart.items = this.AddOrUpdateCartItem(shoppingCart.items, item as ICartItem, qty);
        this.setShoppingCart(shoppingCart);
    }


removeFromCart(itemId:number, qty:number=1){

let shoppingCart = this.getCurrentShoppingCart();

if(shoppingCart==null) return;

let itemToRemove = shoppingCart.items.find(i=>i.id===itemId);

if(itemToRemove){
itemToRemove.qty -= qty;

if(itemToRemove.qty <=0)
shoppingCart.items = shoppingCart.items.filter(i=>i.id !== itemId);

}

if(shoppingCart.items.length <=0){
    this.removeShoppingCart(shoppingCart)
}else{
    this.setShoppingCart(shoppingCart);
}

}
   
    


    //private helper methods
    private mapProductToCartItem(item:IProduct):ICartItem{

        return { id : item.id,
            productName: item.productName,
            price: item.salesPrice,
            qty: 0,
            pictureUrl:item.pictureUrl,
            brand: item.brandName,
            type: item.categoryName      
        };
    };

    private createShoppingCart(){
        const shoppingCart = new ShoppingCart();
        localStorage.setItem("shoppingCartId",shoppingCart.id);
        return shoppingCart;
    }

    private AddOrUpdateCartItem(shoppingCartItems:ICartItem[], cartItem:ICartItem, qty:number){

    const cartItemToAddOrUpdate  = shoppingCartItems.find(i=>i.id===cartItem.id);   

    if(cartItemToAddOrUpdate){
        cartItemToAddOrUpdate.qty += qty;
    }
    else{
        cartItem.qty = qty;
        shoppingCartItems.push(cartItem);
    }

return shoppingCartItems;

    }

private setOrderSummary(shoppingCart:ShoppingCart){

        if(!shoppingCart)
                return;
        
                let totalqty = 0;
                let totalPrice = 0;
                let shipping = 0;
        
                shoppingCart.items.forEach(item=>{
                    totalqty += item.qty;
                    totalPrice += item.qty * item.price;
                } )
        
        let orderSummary:IOrderSummary = {
            shipping: shipping,
            totalPrice: totalPrice,
            subTotal: totalPrice + shipping,
            totalQty : totalqty
        }
        
        this._orderSummaryObservable.next(orderSummary);        
        }
        
private removeShoppingCart(shoppingCart:ShoppingCart){
this.http.delete(this.baseUrl+"DeleteShoppingCart?id="+shoppingCart.id);
this._shoppingCartObservable.next(null);
this._orderSummaryObservable.next(null);
localStorage.removeItem("shoppingCartId")

}

}


