import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, ProveedorPage, SolicitudComprasPage } from "../pages";
import { MainLayout } from "../layouts";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<LoginPage />}></Route>
                <Route element={<MainLayout />}>
                    <Route path="/proveedor" element={<ProveedorPage />}></Route>
                    <Route path="/solicitud_compra" element={<SolicitudComprasPage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter >
    )
}