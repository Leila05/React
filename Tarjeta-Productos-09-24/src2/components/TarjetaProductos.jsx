import React, { useState } from "react";
import PropTypes from 'prop-types';
import './style.css';

const TarjetaProductos = ({ imagen, nombreProducto, precio, descripcion }) =>{
    
    const [cantidad, setCantidad] = useState(10);
    const [enStock, setEnStock] = useState("En Stock");

    const cantProductos = () =>{
        setCantidad((prevCantidad) => {
            const cantidadActual = prevCantidad - 1;
            if(cantidadActual === 0){
                setEnStock("Agotado");
            }
            return cantidadActual;
        })
    } 


    return(
        <div className="product">
            <img src={imagen} className="img-producto"/>      
            <h3>{nombreProducto}</h3>
            <p>${precio}</p>
            <p>{descripcion}</p>
            <p className={enStock === "En Stock" ? "disponible" : "agotado"}>
            {enStock === "En Stock" ? `${enStock} ${cantidad}` : enStock}</p>
            <button onClick={cantProductos} 
            disabled={cantidad === 0}>Comprar</button>
        </div>
    );
}

TarjetaProductos.propTypes = {
    image: PropTypes.string,
    nombreProducto: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    descripcion: PropTypes.string.isRequired,
    enStock: PropTypes.string.isRequired
};


export default TarjetaProductos;
