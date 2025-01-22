import { useEffect, useReducer, useState } from 'react';
import { calculateTotal } from '../services/productService';
import { useNavigate } from 'react-router-dom';
import '../style/Cart.css';

//crear un arreglo para setear los dstos del cliente
const initialCartState = {
  region: '',
  shippingCost: 0,
  regions: [
    {
      name: 'Región Metropolitana',
      cost: 5000,
      description: 'Incluye Santiago y alrededores.',
    },
    {
      name: 'Valparaíso',
      cost: 7000,
      description: 'Incluye Viña del Mar y Valparaíso.',
    },
    {
      name: 'BioBío',
      cost: 8000,
      description: 'Incluye Concepción y alrededores.',
    },
  ],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_REGION':
      const region = state.regions.find((r) => r.name === action.payload);
      return {
        ...state,
        region: region.name,
        shippingCost: region.cost,
        description: region.description,
      };
    default:
      return state;
  }
};

export const CartView = ({ handlerDelete, items }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  //rescatamos el total desde productService
  useEffect(() => {
    setTotal(calculateTotal(items));
  }, [items]);

  const onDeleteProduct = (id) => {
    console.log('eliminando producto');
    handlerDelete(id);
  };

  const onCatalog = () => {
    navigate('/catalog');
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        <h3>Carro de compras</h3>
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Sabor</th>
              <th>Cantidad</th>

              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.product.id}>
                <th>{item.product.name}</th>
                <th>{item.product.price}</th>
                <th>{item.product.flavor}</th>
                <th>{item.product.quantity}</th>
                <th>{item.product.quantity * item.product.price}</th>
                <th>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDeleteProduct(item.product.id)}
                  >
                    Eliminar
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={onCatalog}>
          Seguir comprando
        </button>
      </div>

      <div className="cart-total">
        <h3>Total Carro de Compras</h3>

        <h5>Precio: ${total}</h5>

        <h5>Envío:</h5>

        <h5>Costo envío a Domicilio:</h5>
        {state.region && (
          <div>
            <p>Región seleccionada: <h5>{state.region}</h5></p>
            <p>Costo de envío: <h5>${state.shippingCost}</h5></p>
            <p>Descripción: <h5>{state.description}</h5></p>
          </div>
        )}

        <h5>Seleccione Región a enviar</h5>
        <select
          onChange={(e) =>
            dispatch({ type: 'SET_REGION', payload: e.target.value })
          }
        >
          <option value="">Seleccione una región</option>
          {state.regions.map((region) => (
            <option key={region.name} value={region.name}>
              {region.name}
            </option>
          ))}
        </select>

        <h5>Total a pagar:</h5>

        <h5> ${total + state.shippingCost}</h5>

        <button className="btn btn-success">Comprar</button>
      </div>
    </div>
  );
};
