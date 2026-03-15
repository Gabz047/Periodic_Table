import { createTable, organizeElements } from "../../../utils/table/tableConstructor.js"
import { ElementDescription } from "./elementDescription.js"
import "../../../assets/styles/table/table.css"


const tableSchema = Array.from({ length: 10 }, (_, i) => ({
    period: i + 1,
    columns: Array.from({ length: 18 }, (_, j) => ({
        column: j + 1,
        element: null,
    }))
}))


export function PeriodicTable(elementsData, families) {
    organizeElements(elementsData, tableSchema)


    return (
        `
        <main class="table-container-out">
        <div class="family-description-container">
        <ul class="list-families">
        ${families.map((f) => {
            return `<li class="family-li"><div style="background-color: ${f.color};" class="family-color" ></div>${f.name} </li>`
        }).join("")}
        </ul>
        </div>
        <section class="table-container">
        
        ${createTable(tableSchema)}
        </section>
        </main>
        `
    )
}

document.addEventListener('mouseover', (e) => {
    const elementBlock = e.target.closest(".element-container")
    if (!elementBlock) return

    const tableContainer = document.getElementsByClassName('table-container')[0]

    if (!tableContainer) return

    tableContainer.insertAdjacentHTML(
        "beforeend",
        ElementDescription(JSON.parse(elementBlock.dataset.element))
    )
})