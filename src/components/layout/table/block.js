const style = document.createElement("link")
style.rel = "stylesheet"
style.href = "src/assets/styles/table/block.css"
document.head.appendChild(style)

export function ElementBlock(element) {
    return (
        `
        <div data-element='${JSON.stringify(element)}' style="background-color: ${element.family?.color};" class="element-container family-${element.family?.name}">
            <div class="element-atomic-num-container"><p>${element.atomicNumber}</p></div>
            <div class="element-element-symbol-container">
                <p class="element-element-symbol-symbol">${element.elementSymbol}</p>
                <p class="element-element-symbol-name">${element.name}</p>
            </div>
            <div class="element-atomic-weight-container"><p class="element-atomic-weight-atomic-weight">${element.atomicWeight}</p></div>
        </div>
        `
    )
}