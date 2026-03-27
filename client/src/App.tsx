import { BrowserRouter, Routes, Route, useLocation } from "react-router";
// import Home from "./pages/Home";
// import { Products } from "./pages/Products";
// import Product from "./pages/Product";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
import { lazy, useLayoutEffect } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import Checkout from "./pages/Checkout";
import { Toaster } from "@/components/ui/sonner"
import { Suspense } from 'react';

// const Home = lazy(()=> import('./pages/Home'))
// const Product = lazy(()=> import('./pages/Product'))
// const Login = lazy(()=> import('./pages/Login'))
// const Register = lazy(()=> import('./pages/Register'))
// const Dashboard = lazy(()=> import('./pages/Dashboard'))
// const Checkout = lazy(()=> import('./pages/Checkout'))
// const Products = lazy(()=> import('./pages/Products'))
const EmailSignup = lazy(()=> import('./pages/Email-Signup'))


type ScrollToTopWrapperProps = {
  children: React.ReactNode;
};


const ScrollToTopWrapper: React.FC<ScrollToTopWrapperProps> = ({
  children,
}) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};


const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ScrollToTopWrapper>
        <Suspense fallback={<p>Loading ...</p>}>
        <Routes>
          <Route index element={<EmailSignup />} />
          {/* <Route index element={<Home />} />
          <Route path="products">
            <Route index element={<Products />} />
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="admin" element={<Dashboard />} />
          <Route path='checkout' element={<Checkout/>}/> */}
          

        </Routes>
        </Suspense>
      </ScrollToTopWrapper>
      <Toaster toastOptions={{classNames:{
      
        content:"text-black font-sans",   
         
      }}} position="top-center"/>
    </BrowserRouter>
     <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
