import React, {useState} from 'react';
import './style.css';

const Form = () => {
    const [inputs, setInputs] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        confPass: '',
    });
    
    const [errores, setErrores] = useState({});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
        if (errores[name]) {
            setErrores({
                ...errores,
                [name]: '',
            });
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        validarFormulario();
        setInputs({
            nombre: '',
            apellido: '',
            email: '',
            password: '',
            confPass: '',
        });
    };
    
    const validarFormulario = () => {
        //Se establece que el formulario es válido desde un principio.
        let isValid = true;
        let errores = {};
    
        if (inputs.nombre.trim().length < 4) {
            errores.nombre = 'El nombre debe tener al menos 4 caracteres.';
            //Si no cumple con los requisitos isValid pasa a ser falso.
            isValid = false;
        }
    
        if (inputs.apellido.trim().length < 4) {
            errores.apellido = 'El apellido debe tener al menos 2 caracteres.';
            isValid = false;
        }
    
        if (inputs.email.trim().length < 10 || !inputs.email.includes('@')) {
            errores.email = 'El campo es muy corto o no contiene @.';
            isValid = false;
        }
    
        if (inputs.password.length < 12) {
            errores.password = 'La contraseña debe tener al menos 12 caracteres.';
            isValid = false;
        }
    
        if (inputs.password !== inputs.confPass) {
            errores.confPass = 'Las contraseñas no coinciden.';
            isValid = false;
        }
    
        setErrores(errores);
        return isValid;
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <div className='titulos'>
                <h1>Bienvenido a la Liga de Superhéroes</h1>
                <h3>Registro de Superhéroes</h3>
            </div>
            <div className='contenedor'>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={inputs.nombre}
                    onChange={handleChange}
                />
                {errores.nombre && <p>{errores.nombre}</p>}
            </div>
            <div className='contenedor'>
                <label>Apellido:</label>
                <input
                    type="text"
                    name="apellido"
                    value={inputs.apellido}
                    onChange={handleChange}
                />
                {errores.apellido && <p>{errores.apellido}</p>}
            </div>
            <div className='contenedor'>
                <label>Correo:</label>
                <input
                    type="text"
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
                />
                {errores.email && <p>{errores.email}</p>}
            </div>
            <div className='contenedor'>
                <label>Contraseña:</label>
                <input
                    type="password"
                    name="password"
                    value={inputs.password}
                    onChange={handleChange}
                />
                {errores.password && <p>{errores.password}</p>}
            </div>
            <div className='contenedor'>
                <label>Confirmar Contraseña:</label>
                <input
                    type="password"
                    name="confPass"
                    value={inputs.confPass}
                    onChange={handleChange}
                />
                {errores.confPass && <p>{errores.confPass}</p>}
            </div>
            <button type="submit">Crear Superhéroe</button>
        </form>
    );
};
    
export default Form;