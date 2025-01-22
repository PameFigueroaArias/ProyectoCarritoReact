import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const ProductCardView = ({
  handler,
  id,
  name,
  description,
  price,
  flavors = [],
}) => {
  const [flavor, setFlavor] = useState(flavors[0]);
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  //se pasa toda la data que escogio el usuario a la cart
  const onAddProduct = (product, flavor, quantity) => {
    console.log(product, flavor, quantity);
    handler(product, flavor, quantity);

    navigate('/cart');
  };



  return (
    <>
      {/* //cart del producto seleccionado */}
      
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">${price}</p>
          <p>Sabor a elección </p>
          <select value={flavor} onChange={(e) => setFlavor(e.target.value)}>
            {flavors.length > 0 ? (
              flavors.map((flavor) => (
                <option key={flavor} value={flavor}>
                  {flavor}
                </option>
              ))
            ) : (
              <option value="">Sin sabor</option>
            )}
          </select>

          <p>Seleccione Cantidad</p>
          <div>
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            
          </div>

          <button className="btn btn-secondary">Ver Detalle</button>
          <button
            className="btn btn-primary"
            //los datos de del producto escogido
            //escoge flavor
            onClick={() =>
              onAddProduct({
                id,
                name,
                description,
                price,
                flavor,
                quantity
              })
            }
          >
            Agregar
          </button>
        </div>
      </div>
    </>
  );
};
