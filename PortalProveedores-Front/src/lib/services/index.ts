import { instance } from "./config";

const endpointProducto = "solicitud/api/producto";
const endpointSolicitudCompra = "solicitud/api/solicitud";
const endpointProveedor = "api/proveedor";

export const productosService = {
    getAll: async () => {
        return await instance.get(endpointProducto)
    },
    getById: async (id: number) => {
        return await instance.get(`${endpointProducto}/${id}`)
    }
}

export const solicitudCompraService = {
    post: async (body: object) => await instance.post(endpointSolicitudCompra, body),
}

export const proveedorService = {
    getAll: async () => {
        return await instance.get(endpointProveedor)
    },
    getById: async (id: number) => {
        return await instance.get(`${endpointProveedor}/${id}`)
    },
    post: async (body: object) => await instance.post(endpointProveedor, body)
}