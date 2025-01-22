import { useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { useEffect } from "react";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsAction";

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
export const useItemsCart = () => {
  const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

  useEffect(() => {

    sessionStorage.setItem('cart', JSON.stringify(cartItems)); 
  },[cartItems])

  const handlerAddProductCart = (product) => {

    dispatch(
      {
       type: AddProductCart,
       payload: product,

      }
   )

   

 

  //si el id que viene de la car es igual al del producto de lista 
  //   const hasItem = cartItems.find((i) => i.product.id === product.id);
  //   if (hasItem) {
  //     dispatch(
  //       {
  //         type: UpdateQuantityProductCart,
  //         payload: product,
  //       }
  //     ); 
  //   }else {
  //       dispatch(
  //          {
  //           type: AddProductCart,
  //           payload: product,

  //          }
  //       )
  //     }
      // setCartItems(
      //   cartItems.map((i) => {
      //     if (i.product.id === product.id) {
      //       i.quantity = i.quantity + 1;
      //     }
      //     return i;
      //   })
      // );
    // } else {
    //   setCartItems([
    //     ...cartItems,

    //     {
    //       product,
    //       quantity: 1,
    //     },
    //   ]);

      // setCartItems([
      //   ...cartItems.filter((i) => i.product.id !== product.id),
      //   {
      //     product,
      //     quantity: hasItem.quantity + 1,
      //   }

      // ])
    }



   
  

  const handlerDeleteProductCart = (id) => {
    // setCartItems([
    //   ...cartItems.filter((i) => i.product.id !== id)
    // ]);
    dispatch({
      type: DeleteProductCart,
      payload: id, 
    })
  }

  return {
    cartItems,
    handlerAddProductCart,
    handlerDeleteProductCart,
  
  }

}