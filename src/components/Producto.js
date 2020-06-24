import React from 'react';

const Producto = ({producto, carrito, productos, agregarProducto}) => {

    const {id, nombre, precio} = producto

    // funcion para agregar elemento al carrito con el evento click
    const seleccionarProductor= id =>{
        const producto = productos.filter(producto => producto.id===id)[0]
        // console.log(producto[0])
        agregarProducto([
            ...carrito,
            producto
        ])
    }

    // Funcion para eliminar un producto del carrito
    const eliminarProducto = id => {
        const producto = carrito.filter(producto => producto.id !== id)
        // Colocar los productos en el State
        agregarProducto(producto)
    }

    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>$ {precio}</p>

            {productos
                ?
                (
                    /* si un elemento va a tener varias atributos se recomienda
                    ponerlos todo en un sola linea */
                    <button
                        type="button" onClick={()=> seleccionarProductor(id)}
                    >Comprar</button>
                )
                :
                (
                    (
                        <button
                            type="button" onClick={()=> eliminarProducto(id)}
                        >Eliminar</button>
                    )
                )
            }
        </div>
    );
}

export default Producto;