import ReactDOM from 'react-dom/client';
import Home from './views/Home/home';
import './index.css'
import Blogview from './views/BlogView/Blogview';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/blog/:id',
    element : <Blogview/>
  }

])

root.render(<RouterProvider router={router}/>);