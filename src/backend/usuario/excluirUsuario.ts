"use server"
import RepositorioUsuario from "./RepositorioUser";

export default async function excluirUsuario(id: string) {
    return RepositorioUsuario.excluir(id)
}
