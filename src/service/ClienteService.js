import api from "@/lib/axios";
import { data } from "autoprefixer";

export default {
    obenerClientes() {
        return api.get('/clientes')
    },
    agregarCliente(data){
        return api.post('/clientes', data)
    },
    obtenerCliente(id) {
        return api.get('/clientes/' + id)
    },
    actualizarCliente(id, data) {
        return api.patch('/clientes/' + id, data)
    },
    cambiarEstado(id, data) {
        return api.patch('/clientes/' + id, data)
    },
    eliminarClientes(id) {
        return api.delete('/clientes/' + id)
    }
}