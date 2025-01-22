# Proyecto Carrito React
Este proyecto muestra el desarrollo utilizando React en el Frontend de la interacción que se produce al escoger un producto, mostrar el producto, seleccionar sabor y cantidad a comprar. Adicionalmente, se selecciona la región donde se desea el despacho, como consecuencia se mostrará el precio seleccionado y el total a pagar. 

## Instalación
1. Clona este repositorio:
   ```bash
   git clone https://github.com/PameFigueroaArias/ProyectoCarritoReact.git
   ```
   
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia la aplicación:
   ```bash
   npm run dev
   ```

# Características principales
1.Selección de productos:
- Muestra lista de productos disponibles.
- Permite seleccionar sabor.
- Permite seleccionar cantidad mediante un contador.

2.Carrito de Compras
- Presenta los productos seleccionados con sabor y cantidad.
- Permite eliminar producto.
- Permite navegar a la selección de productos para seguir comprando.

2.1.Total Carrito
- Visualiza el precio total de productos.
- Permite seleccionar la región donde se desea despachar.
- Muestra información del lugar seleccionado.
- Muestra una descripción.
- Presenta el total a pagar.

3.Navbar
- Barra de navegación con enlaces a las secciones: INICIO, PRODUCTOS.

  
# Tecnologías utilizadas
- Frontend: React con React Router para navegar.
- Hooks: useState, useReducer para mejorar estados globales.
- Estilos: CSS, Bootstrap.


# Futuras Mejoras
- Integración con un backend en Spring.
- Pruebas unitarias y de integración.
