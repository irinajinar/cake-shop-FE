import axios from 'axios';
import { useEffect, useState } from 'react';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;