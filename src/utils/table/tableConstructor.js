import { ElementBlock } from "../../components/layout/table/block"

export const formatNumber = (n) => {
    return Number(((n ?? "").toString()).replace(",",".").replace(/[^\d.]/g, "")) || null
}

export const calculateMass = (mass, protons, neutrons) => {
    let Atomicmass = formatNumber(mass)
    let Nprotons = formatNumber(protons)
    let Nneutrons = formatNumber(neutrons)

    !Atomicmass ? Atomicmass = Nneutrons + Nprotons : !Nneutrons ? Nneutrons = Atomicmass - Nprotons : Nprotons = Atomicmass - Nprotons
    
    return {
        mass: Atomicmass,
        protons: Math.floor(Nprotons),
        neutrons: Math.floor(Nneutrons)
    }
}

export const organizeElements = (elements, tableSchema) => {
    let period
    let periodIndex
    elements.forEach((e) => {
        if (e.family.id != 10 && e.family.id != 9) {
            period = tableSchema.find(s => s.period == e.period)
            periodIndex = (tableSchema.findIndex(s => s.period == e.period))
        } else {
            if (e.family.id == 10) {
                period = tableSchema[9]
                periodIndex = 9
            } else {
                period = tableSchema[8]
                periodIndex = 8
            }
        }

        let elementColumns
        if (e.family.id == 4 && period.period == 6 || period.period == 7) {

            elementColumns = e.family.columns.filter(c => c != 3)
        } else {
            elementColumns = e.family.columns

        }

        const avaiableColumnsForElement = period.columns.filter(c => elementColumns.includes(c.column))

        for (const c of avaiableColumnsForElement) {

            if (c.element == null) {


                const columnIndex = tableSchema[periodIndex].columns
                    .findIndex(c3 => c3.column == c.column)

                tableSchema[periodIndex].columns[columnIndex].element = e

                break
            }

        }


    })

}

export const createTable = (tableSchema) => {


    let html = `
        <table>
        <tr>
        ${tableSchema[0].columns.map(s => `<th>${s.column}</th>`).join("")}
        </tr>
        `

    for (const r of tableSchema) {
        let periodSpan = 0
        let rowHtml = ""

        for (const c of r.columns) {
            if (c.element != null) {


                rowHtml += `<td>${ElementBlock(c.element)}</td>`
            } else {

                periodSpan += 1
                rowHtml += `<td colspan="${periodSpan}"></td>`
                periodSpan = 0
            }
        }
        html += `<tr>
            ${rowHtml}
            </tr>`
    }
    html += `</table>`

    return html

}