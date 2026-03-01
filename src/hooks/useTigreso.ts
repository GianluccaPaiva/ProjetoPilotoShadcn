import { toast } from "sonner"

export function useTigreso(navegarPara?: (tela: string) => void) {
  const clickMatar = () => {
    toast("Como ousa tentar matar o grande Tigreso? Sofra por isso")
    setTimeout(() => {
      window.close()
    }, 1000)
  }
  const clickAdorar = () => {
    toast("Você adorou o Tigreso! Glória ao Tigreso!")
    if (navegarPara) {
      navegarPara("principal")
    }
  }
  return { clickMatar, clickAdorar }
}