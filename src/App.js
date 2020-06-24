import React, { Fragment, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito' 

function App() {
  // Obtener la fecha actual
  const fecha = new Date().getFullYear()

  // Crear listado de productos
  // por lo general un listado deberia venir desde una base de datos o desde una API
  // mientras sera un arreglo de objetos para este ejemplo

  // const []=useState(); <- sintaxis basica para ocupar un State
  // se recomiendo que el segundo parametro (el que modifica el estado)
  // se llame setNombreDeLaFuncion pero puede ser cualquier nombre
  const [productos, guardarProductos]=useState([
    {id:1, nombre:'Camisa ReactJs', precio:50},
    {id:2, nombre:'Camisa Angular', precio:40},
    {id:3, nombre:'Camisa Js', precio:30},
    {id:4, nombre:'Camisa Vue', precio:50}
  ])
  // State del carrito de compras
  // como debe iniciar en cero el carrito le pasamos un arreglo vacio
  const [carrito, agregarProducto] = useState([])

  return (
    <Fragment>

      <Header 
        titulo="Tienda Virtual"
      />
        <h2>Lista de productos</h2>
        {productos.map(producto=>(
          <Producto 
            // pasamos el key por que React siempre pide que los hijos
            // de los componentes sean unicos
            key={producto.id}
            producto={producto}
            carrito={carrito}
            productos={productos}
            agregarProducto={agregarProducto}
          />
        ))}

      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Footer
        fecha={fecha}
      />

    </Fragment>
  )
}

export default App;
