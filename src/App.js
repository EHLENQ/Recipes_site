import './App.css';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Details from './pages/details/Details';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {path:'/',element:<Home/>},
      {path:'/Create',element:<Create/>},
      {path:'/Details/:id',element:<Details/>},
      {path:'/Search',element:<Search />}
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
