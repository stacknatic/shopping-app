import { createBrowserRouter } from 'react-router-dom';
import '../App.css';
import Test from '../Test';
import ProductsList from '../ProductsList';
import Homepage from '../Homepage';

const router = createBrowserRouter([
  {
    path: '/test',
    element: <Test />
  },
  {
    path: '/homepage',
    element: <Homepage />
  },
  {
    path: '/products',
    element: <ProductsList />
  }
]
);

export default router;
