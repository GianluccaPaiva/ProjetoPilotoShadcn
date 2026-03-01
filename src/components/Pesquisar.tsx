import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { TurmaCard } from "./TurmaCard"
import { usePesquisa } from "@/hooks/usePesquisa"

type PesquisarProps = {
    mudarInscricao: (materia: string) => void
    estaInscrito: (materia: string) => boolean
    marcarMural: (key: string) => void
    voltarPrincipal: () => void
}

export function Pesquisar(props: PesquisarProps) {
    const { textoPesquisa, setTextoPesquisa, aberto, mudarAberturaSheet, turmasFiltradas } = usePesquisa({
        aoFecharPesquisa: props.voltarPrincipal
    })

    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            <Sheet open={aberto} onOpenChange={mudarAberturaSheet}>
                <SheetContent side="right" className="w-full sm:w-[400px] lg:w-[500px] flex flex-col">
                    <SheetHeader>
                        <SheetTitle>Pesquisar Salas</SheetTitle>
                        <SheetDescription>
                            Digite para pesquisar turmas, professores ou matérias:
                        </SheetDescription>
                    </SheetHeader>

                    <div className="mt-6 flex flex-col gap-4">
                        <Input
                            placeholder="Digite sua pesquisa..."
                            value={textoPesquisa}
                            onChange={(e) => setTextoPesquisa(e.target.value)}
                            className="w-full"
                            autoFocus
                        />
                    </div>

                    {/* Área de resultados com Rolagem (Scroll) */}
                    <div className="mt-4 flex-1 overflow-y-auto pr-2 pb-6 space-y-4">
                        {textoPesquisa.trim() === "" ? (
                            <div className="text-sm text-muted-foreground text-center py-8">
                                Digite algo para começar a pesquisa
                            </div>
                        ) : turmasFiltradas.length > 0 ? (
                            <>
                                <div className="text-sm text-muted-foreground mb-2">
                                    {turmasFiltradas.length} resultado{turmasFiltradas.length !== 1 ? 's' : ''} encontrado{turmasFiltradas.length !== 1 ? 's' : ''}
                                </div>

                                <div className="flex flex-col gap-4">
                                    {turmasFiltradas.map(([key, turma]) => (
                                        <TurmaCard
                                            key={key}
                                            materia={turma.materia}
                                            banners={turma.banners}
                                            professor={turma.professor}
                                            fotoProfessor={turma.foto_professor}
                                            sala={turma.sala}
                                            turma={turma.turma}
                                            inscrito={props.estaInscrito(key)}
                                            clickInscrito={() => props.mudarInscricao(key)}
                                            clickMural={() => {
                                                props.marcarMural(key)
                                                mudarAberturaSheet(false)
                                            }}
                                        />
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="text-sm text-muted-foreground text-center py-8">
                                Nenhum resultado encontrado para "{textoPesquisa}"
                            </div>
                        )}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}