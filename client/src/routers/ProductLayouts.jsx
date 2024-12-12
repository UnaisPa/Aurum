import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Aupay from "../pages/Aupay";

function ProductsLayout() {
    const location = useLocation();
  return (
    <div>
      {location.pathname=='/products' || location.pathname=='/products/'?<Navigate to="/products/aupay" />:<Outlet />}
    </div>
  );
}

export default ProductsLayout;
