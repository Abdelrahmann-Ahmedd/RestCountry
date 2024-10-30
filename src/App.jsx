import './App.css';
import {createBrowserRouter,  RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';


const myRouter = createBrowserRouter([
  { path:"/RestCountry", element: <Layout /> , children: [
    { path: "", element: <Home /> },
  ]},
])

function App() {
  return (
    <RouterProvider router={myRouter}></RouterProvider>
  );
}

export default App;
