import { Usuario } from "@/core/model/Usuario"
import Image from "next/image"

export interface LinhaUsuarioProps {
    usuario: Usuario
    onClick?: (usuario: Usuario) => void
}

export default function LinhaUsuario (props : LinhaUsuarioProps) {
    return (
        <div className="flex bg-zinc-900 p-4 items-center gap-5 rounded-md cursor-pointer"
        onClick={() => props.onClick?.(props.usuario)}>
            <Image 
                src="data:image/jpeg;base64,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"
                width={80}
                height={80}
                className="rounded-full"
                alt="Avatar"
            />
            <div className="flex flex-col">
                <span className="text-xl font-black">{props.usuario.nome}</span>
                <span className="text-sm text-zinc-400">{props.usuario.email}</span>
            </div>
        </div>
    )
}