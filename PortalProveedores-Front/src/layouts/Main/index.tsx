import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <div className="p-2 max-w-4xl m-auto">
        <ul className="flex justify-around 
        bg-gray-800/90 
          rounded-xl mb-5
          *:transition *:ease-in-out *:duration-700 
          hover:*:-translate-y-1 
          hover:*:scale-105
          *:text-white
          *:p-4"
        >
          <li>
            <Link to={`/proveedor`}>
              Proveedor
            </Link>
          </li>
          <li>
            <Link to={`/solicitud_compra`}>
              Solicitud de Compras
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
}
