import React, { useState } from 'react';
import { proveedorService } from '../../lib/services';

export default function ProveedorPage() {
    const [values, setValues] = useState({
        nombreProveedor: "",
        direccion: "",
        celular: "",
        asociacion: "",
    });

    const handleChangeList = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        if (e.target) {
            setValues({
                ...values,
                [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value,
            });
            return;
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Registrar el proveedor a la API
            const response = await proveedorService.post(
                values
            );

            // Manejar la respuesta de la API
            console.log('Proveedor registrado:', response.data);
            alert("Proveedor registrado correctamente!")

            // Limpiar
            setValues({
                nombreProveedor: "",
                direccion: "",
                celular: "",
                asociacion: "",
            });
        } catch (error) {
            console.error('Error al registrar el proveedor:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Registro de Proveedor</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="nombreProveedor" className="block text-gray-700 font-semibold mb-2">Nombre del Proveedor</label>
                    <input
                        type="text"
                        id="nombreProveedor"
                        name="nombreProveedor"
                        value={values.nombreProveedor}
                        onChange={handleChangeList}
                        className="border border-gray-300 rounded px-3 py-2 w-full text-black"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="direccion" className="block text-gray-700 font-semibold mb-2">Dirección</label>
                    <input
                        type="text"
                        id="direccion"
                        name="direccion"
                        value={values.direccion}
                        onChange={handleChangeList}
                        className="border border-gray-300 rounded px-3 py-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="celular" className="block text-gray-700 font-semibold mb-2">Celular</label>
                    <input
                        type="text"
                        id="celular"
                        name="celular"
                        value={values.celular}
                        onChange={handleChangeList}
                        className="border border-gray-300 rounded px-3 py-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="asociacion" className="block text-gray-700 font-semibold mb-2">Asociación</label>
                    <select
                        id="asociacion"
                        name="asociacion"
                        value={values.asociacion}
                        onChange={handleChangeList}
                        className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                        <option>Selecciona una opción</option>
                        <option value="1">Socio</option>
                        <option value="0">No Socio</option>
                    </select>
                </div>
                <div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Registrar Proveedor
                    </button>
                </div>
            </form>
        </div>
    );
};