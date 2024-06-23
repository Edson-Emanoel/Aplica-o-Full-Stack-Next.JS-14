"use server"
import RepositorioUsuario from "./RepositorioUser";

export default async function obterTodos() {
    return RepositorioUsuario.obterTodos()
}