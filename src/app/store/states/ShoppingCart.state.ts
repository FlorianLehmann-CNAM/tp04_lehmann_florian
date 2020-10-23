import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AddProduct, ClearShoppingCart, DelProduct } from '../actions/ShoppingCart.action';
import { Product } from '../../models/Product';
import { Article, ShoppingCart } from '../../models/ShoppingCart';


@State<ShoppingCart>({
    name: 'shoppingCart',
    defaults: {
        products: []
    }
})
export class ShoppingCartState{

    @Selector()
    static GetProducts(state: ShoppingCart) : Article[]{
        return state.products;
    }

    @Selector()
    static GetProductsNumber(state: ShoppingCart) : number{
        let number = 0;
        state.products.forEach((p) =>{
            number += p.quantity || 1
        })
        return number;
    }
    

    @Action(AddProduct)
    add({getState, patchState} : StateContext<ShoppingCart>, {payload} : AddProduct){
        
        const state : ShoppingCart = getState();
        let foundProductIndex : number = state.products.findIndex((p) => p.title.toLowerCase() == payload.title.toLowerCase());
        if(foundProductIndex > -1){
           
            state.products[foundProductIndex].quantity += 1;
            
        }
        else{
            payload.quantity = 1;
            state.products = [...state.products, payload];
        }
        
        
        patchState({
            products: [...state.products]
        })
    }

    @Action(DelProduct)
    delete({getState, patchState} : StateContext<ShoppingCart>, {payload, deleteAll} : DelProduct){
        const state : ShoppingCart = getState();
        let foundProductIndex : number = state.products.findIndex((p) => p.title.toLowerCase() == payload.title.toLowerCase());
        if(deleteAll){
            patchState({
                products: [...state.products.filter((p, i) => i != foundProductIndex)]
            });
            return;
        }
        if(foundProductIndex > -1){
            let quantity : number = state.products[foundProductIndex].quantity;
            if(quantity == 1)
            {
                patchState({
                    products: [...state.products.filter((p, i) => i != foundProductIndex)]
                });
            }
            else{
                state.products[foundProductIndex].quantity--;
                patchState({
                    products: [...state.products]
                })
            }
        }
        else{
            console.log("Error : product not found");
        }
    }

    @Action(ClearShoppingCart)
    clear({getState, patchState} : StateContext<ShoppingCart>){
        const state : ShoppingCart = getState();

        state.products = [];
        patchState({
            products: [...state.products]
        });
    }

}