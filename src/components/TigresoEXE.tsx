import { toast } from "sonner"
import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTigreso } from "@/hooks/useTigreso"
import type { OpcoesTela } from "@/hooks/useGerenciador"

type TigresoEXEProps = {
  navegarPara?: (tela: OpcoesTela) => void
}

export function TigresoEXE({ navegarPara }: TigresoEXEProps) {
    const { clickMatar, clickAdorar } = useTigreso(navegarPara)
    const hasShown = useRef(false)
    
    useEffect(() => {
        if (!hasShown.current) {
            toast("Glória ao Tigreso. Ajoelhe-se e adore o grande Tigreso, o deus supremo do suporte. Ele é o senhor dos bugs, o mestre dos erros e o guardião da estabilidade. Com seu poder divino, ele protege os sistemas e garante que tudo funcione perfeitamente. Glória ao Tigreso, o deus do suporte!")
            hasShown.current = true
        }
    }, [])
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Card className="bg-yellow-500">
        <CardHeader>
          <CardTitle>Glorifique o Tigreso</CardTitle>
        </CardHeader>
        <CardContent>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvBcRo5HWNC-WR4C4ls6kVCYEp9Ja7W0azAA&s" alt="Apenas tigreso" className="w-100 h-115 mx-auto mb-4" />
          <div className="flex justify-between gap-4">
            <Button variant="destructive" size="lg" className="flex-1" onClick={clickMatar}>
              Matar
            </Button>
            <Button className="bg-green-500 flex-1" size="lg" onClick={clickAdorar}>
              Adorar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}