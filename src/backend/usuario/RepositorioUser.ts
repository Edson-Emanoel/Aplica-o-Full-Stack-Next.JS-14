import { Usuario } from "@/core/model/Usuario";
import { PrismaClient } from "@prisma/client";

export default class RepositorioUsuario{
    private static db: PrismaClient = new PrismaClient()

    static async listar(usuario: Usuario){
        return await this.db.user.findMany()
    }

    static salvar(usuario: any): Promise<Usuario>{
        return this.db.user.upsert({ 
            where: {id: usuario.id},
            update: usuario,
            create: usuario
        })
    }

    static async obterTodos(): Promise<Usuario[]> {
        return await this.db.user.findMany()
    }

    static async obterPorId(id: string): Promise<Usuario>{
        const usuario = await this.db.user.findUnique({
            where: { id } 
        })
        return usuario as Usuario
    }

    static async deletar(id: string): Promise<void>{
        await this.db.user.delete({
            where: { id },
        })
    }

    static async excluir(id: string): Promise<void>{
        await this.db.user.delete({
            where: { id },
        })
    }
}
