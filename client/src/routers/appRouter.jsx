// src/routers/AppRouter.jsx
import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Aupay from '../pages/Aupay';
import Ausales from '../pages/Ausales';
import Aushop from '../pages/Aushop';
import ProductsLayout from './ProductLayouts';
import Contact from '../pages/Contact';
import ClipLoader from "react-spinners/ClipLoader";
// import PrivateRoute from './privateRoute';
// import AuthPrivateRoute from './authPrivateRoute';

// Lazy load each page component
const Home = lazy(() => import('../pages/Home'));
// const Login = lazy(() => import('../pages/Login'));
// const Register = lazy(() => import('../pages/Register'));

function AppRouter() {
    useEffect(() => {
        console.log('helo')
    })
    return (
        <BrowserRouter>
            <Navbar />
            <Suspense fallback={<div className=' bg-gradient-to-r from-[#080909] to-[#1f2937] h-screen flex justify-center items-center' >
                <ClipLoader color='white' />
            </div>}>  {/* Show a loader while components load */}
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    {/* <Route path='/products' element={<ProductRouter/>} /> */}
                    <Route path="/products" element={<ProductsLayout/>}>
                        <Route path="aupay" element={<Aupay />} />
                        <Route path="ausales" element={<Ausales />} />
                        <Route path="aushop" element={<Aushop />} />
                        {/* <Route path="*" element={<Aupay/>} /> */}
                    </Route>
                    <Route path='/contact' element={<Contact/>} />
                    {/* //   <Route path="/login" element={<AuthPrivateRoute><Login /></AuthPrivateRoute>} />
        //   <Route path="/register" element={<AuthPrivateRoute><Register /></AuthPrivateRoute>} /> */}
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default AppRouter;
