import Navbar from "./components/Navbar"
import AppSidebar from "./components/AppSidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { ThemeProvider } from "./components/provedores/ThemeProvider"
import { GerenciadorTelas } from "./components/GerenciadorTelas"
import { Toaster } from "sonner"
import { useGerenciador } from "./hooks/useGerenciador"

function App() {
  const { usuario, mudarInscricao, estaInscrito, marcarMural } = useGerenciador();
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar />

        <main className="pagina-principal">
          <Navbar />
          <div className="pagina-conteudo">
            <GerenciadorTelas
              usuario={usuario}
              mudarInscricao={mudarInscricao}
              estaInscrito={estaInscrito}
              marcarMural={marcarMural}
            />
          </div>
        </main>
      </SidebarProvider>
      <Toaster position="top-center" />
    </ThemeProvider>
  )
}

export default App