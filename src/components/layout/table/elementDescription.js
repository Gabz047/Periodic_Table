import { calculateMass } from "../../../utils/table/tableConstructor"
const style = document.createElement("link")
style.rel = "stylesheet"
style.href = "src/assets/styles/table/elementsDescription.css"
document.head.appendChild(style)

export function ElementDescription(element) {
    return (
        `
        <div class="description-container" >
       <table>
<tr>
    <th>Elemento</th>
    <td id="element-name">${element.name}</td>
</tr>

<tr>
    <th>Massa Atômica</th>
    <td id="atomic-mass">${element.atomicWeight}</td>
</tr>

<tr>
    <th>Neutrons</th>
    <td id="neutrons">${calculateMass(element.atomicWeight, element.atomicNumber, null).neutrons}</td>
</tr>

<tr>
    <th>Prótons</th>
    <td id="protons">${element.atomicNumber}</td>
</tr>

<tr>
    <th>Elétrons</th>
    <td id="electrons">${element.atomicNumber}</td>
</tr>

<tr>
    <th>Descrição</th>
    <td id="description">${element.description}</td>
</tr>
</table>
        </div>
        `
    )
}