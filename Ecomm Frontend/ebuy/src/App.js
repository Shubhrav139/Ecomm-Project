import { useEffect, useState } from 'react';
import './App.css';
import Catalog from './components/Catalog';
import Navbar from './components/Navbar';

function App() {
  const [cart, setCart] = useState({});
  const [restored, setRestored] = useState([]);
  const [role, setRole] = useState('');

  function handleCart(product) {
    setCart({
      ...cart, [product['_id']]: product
    })
  }

  function restoreCart(id) {
    setRestored([id]);
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setRole(token);
    }
  }, [])

  return (
    <div className="App">
      <Navbar cart={cart} restoreCart={restoreCart} setRole={setRole} role={role} />
      <Catalog handleCart={handleCart} restored={restored} role={role} />
    </div>
  );
}

export default App;
