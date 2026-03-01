import { useState } from "react"

export function useConfiguracoes() {
    const[notificacoes, setNotificacoes] = useState(false)
    const[contagemSuporte, setContagemSuporte] = useState(0)
    
    const clickarNotificacoes = () => {
        setNotificacoes(!notificacoes)
    }
    
    const clicarSuporte = () => {
        setContagemSuporte(prev => {
            const novaContagem = prev + 1
            // Chamar tocarAudio no 5º clique diretamente como ação do usuário
            if (novaContagem === 5) {
                // Tocar arquivo de áudio no volume máximo usando Web Audio API
                try {
                    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
                    
                    // Carregar o arquivo
                    fetch('/sons/tigreso.mp3')
                        .then(response => response.arrayBuffer())
                        .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
                        .then(audioBuffer => {
                            const source = audioContext.createBufferSource()
                            const gainNode = audioContext.createGain()
                            
                            source.buffer = audioBuffer
                            source.connect(gainNode)
                            gainNode.connect(audioContext.destination)
                            
                            // Volume máximo (2.0 para amplificação extra)
                            gainNode.gain.value = 2.0
                            
                            console.log('Tocando áudio com volume amplificado:', gainNode.gain.value)
                            source.start(0)
                            
                            console.log('Áudio tocado com sucesso! Duração:', audioBuffer.duration)
                        })
                        .catch(error => console.error('Erro ao carregar/tocar áudio:', error))
                } catch (error) {
                    console.error('Erro ao criar AudioContext:', error)
                }
            }
            return novaContagem
        })
    }
    
    const resetarContador = () => {
        setContagemSuporte(0)
    }
    
    return {notificacoes, clickarNotificacoes, contagemSuporte, clicarSuporte, resetarContador}
}