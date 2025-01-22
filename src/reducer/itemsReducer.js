import {
  AddProductCart,
  DeleteProductCart,
  UpdateQuantityProductCart,
} from './itemsAction';

export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    //el que pasa a la cart
    case AddProductCart:
      return [
        ...state,
        {
          product: action.payload,
          
        },
      ];
      //actualiza la cantidad al momento
      //de agregar producto
      //actualice el dato de quantity al
      //pasar a la cart de product
    case UpdateQuantityProductCart:
          return [
            ...state,
            {
            quantity: action.payload,
            }
          ];
        
        
      
    case DeleteProductCart:
      return [...state.filter((i) => i.product.id !== action.payload)];

    default:
      return state;
  }
};
