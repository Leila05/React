import './App.css';
import TarjetaProductos from './components/TarjetaProductos';
import laptop from './assets/laptop.jpg';
import smartphone from './assets/smartphone.jpg';
import auriculares from './assets/auriculares.jpg';
import monitor from './assets/monitor.jpg';

function App() {

  return (
    <>
    <h1>TechStore - Tu destino para la mejor tecnología</h1>
    <div className="app">
      <div className='sub-cont'>
        <TarjetaProductos 
        imagen = {laptop}
        nombreProducto = "Laptop" 
        precio = {5000}
        descripcion = "Una potente laptop para trabajar y jugar."
        />
      </div>
      
      <div className='sub-cont'>
        <TarjetaProductos 
        imagen = {smartphone}
        nombreProducto = "Smartphone" 
        precio = {800}
        descripcion = "Un smartphone de última generación."
        />
      </div>
      
      <div className='sub-cont'>
        <TarjetaProductos
        imagen = {auriculares} 
        nombreProducto = "Auriculares" 
        precio = {200}
        descripcion = "Auriculares con cancelación de ruidos."
        />
      </div>
      
      <div className='sub-cont'>
        <TarjetaProductos
        imagen = {monitor} 
        nombreProducto = "Monitor" 
        precio = {300}
        descripcion = "Monitor 4k para una experiencia visual increíble."
        />
      </div>
    </div>
    </>
  )
}

export default App;
