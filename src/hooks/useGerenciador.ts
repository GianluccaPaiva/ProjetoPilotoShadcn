import { useState } from "react";

export function useGerenciador() {
    const [usuario, setUsuario] = useState({
        inscricoes: {} as Record<string, boolean>,
        acessouOq: "calendario" as "mural"|"calendario"|"principal",
        chaveMural: "",
    });

    const mudarInscricao = (materia: string) => {
        setUsuario((anterior) => ({
            ...anterior,
            inscricoes: {
                ...anterior.inscricoes,
                [materia]: !anterior.inscricoes[materia],
            },
        }));
    };

    const estaInscrito = (materia: string) => Boolean(usuario.inscricoes[materia]);

    const marcarMural = (key: string) => {
        setUsuario((anterior) => ({ ...anterior, acessouOq: "mural", chaveMural: key }));
    };

    const marcarCalendario = () => {
        setUsuario((anterior) => ({ ...anterior, acessouOq: "calendario" }));
    };

    return { usuario, mudarInscricao, estaInscrito, marcarMural, marcarCalendario };
}