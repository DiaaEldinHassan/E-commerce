import React, { useState, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'

// Lazy load components
const App = lazy(() => import('./App.jsx'))
const Store = lazy(() => import('./StoresPage/Store.jsx'))
const Login = lazy(() => import('./LoginPage/Login.jsx'))
const Landing = lazy(() => import('./Landing/Landing.jsx'))
const Loading = lazy(() => import('./LoadingPage/Loading.jsx'))
const Products = lazy(() => import('./ProductsPage/Products.jsx'))
const Buy = lazy(() => import('./ProductsPage/BuyProduct/Buy.jsx'))
// Loading component


function Root() {

  const [isLogged, setIsLogged] = useState(true);
  function setLogged(value){
    setIsLogged(value);
  }
  React.useEffect(() => {
    console.log(isLogged);
  }, [isLogged]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
          <Landing logged={isLogged}/>
        </Suspense>
      ),
      errorElement: <Link to="/">Page Not found Yet Click Here To Back Home</Link>,
    },
    {
      path: "/aboutUs",
      element: (
        <Suspense fallback={<Loading />}>
          <App setLogged={setLogged} />
        </Suspense>
      ),
      errorElement: <Link to="/">Page Not found Yet Click Here To Back Home</Link>,
    },
    {
      path: "/stores",
      element: (
        <Suspense fallback={<Loading />}>
          <Store logged={isLogged} />
        </Suspense>
      ),
      errorElement: <Link to="/">Page Not found Yet Click Here To Back Home</Link>,
    },
    {
      path: "/login",
      element: (
        <Suspense fallback={<Loading />}>
          <Login logged={isLogged} func={setLogged}/>
        </Suspense>
      ),
      errorElement: <Link to="/">Page Not found Yet Click Here To Back Home</Link>,
    },
    {
      path: "/products",
      element: (
        <Suspense fallback={<Loading />}>
          <Products logged={isLogged} />
        </Suspense>
      ),
      errorElement: <Link to="/">Page Not found Yet Click Here To Back Home</Link>,
    },
    {
      path: "/buy/:id",
      element: (
        <Suspense fallback={<Loading />}>
          <Buy />
        </Suspense>
      ),
    }
  ]);

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById('root')).render(
  <Root />
)
