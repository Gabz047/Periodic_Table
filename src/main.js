import { PeriodicTable } from './components/layout/table/table.js'
import { elementsDataNested, families } from "./utils/table/elementsData.js"

console.log("[main.js] Iniciando aplicação...")

try {
    const app = document.getElementById("app")
    if (!app) {
        throw new Error("Elemento #app não encontrado no HTML")
    }
    
    const html = PeriodicTable(elementsDataNested(), families)
    app.innerHTML = html
    console.log("[main.js] Tabela renderizada com sucesso!")
} catch (error) {
    console.error("[main.js] Erro durante renderização:", error)
    document.getElementById("app").innerHTML = `<h1>Erro ao carregar a tabela</h1><p>${error.message}</p>`
}
