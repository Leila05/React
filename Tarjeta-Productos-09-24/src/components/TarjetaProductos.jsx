import React from "react";
import PropTypes from 'prop-types';
import './style.css';

const TarjetaProductos = ({ imagen, nombreProducto, precio, descripcion, enStock }) =>{
    return(
        <div className="product">
            <img src={imagen} className="img-producto"/>      
            <h3>{nombreProducto}</h3>
            <p>${precio}</p>
            <p>{descripcion}</p>
            <p className={enStock === "En Stock" ? "disponible" : "agotado"}>{enStock}</p>
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
