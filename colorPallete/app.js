/**
 *  Get all dom elemet
 * 
 *      1 container
 *      2 color-box
 *      4 title of the text
 *      3 button to generate new color 
 * 
 *  Set a number of generated color will be 30
 * 
 */

const container = document.getElementById('container')
const buttonGenerate = document.getElementById('generate-btn')
const number = 30

/**
 *  function to create UI for colorbox
 * 
 */

const colorBoxUi = (generateColor) => {

    for (let index = 0; index < 30; index++) {
        let hex = generateColor()
        const colorBox = document.createElement('div')
        colorBox.className = "color-box"
        colorBox.innerHTML = `<div class="color" style="background-color: #${hex};" id="color"></div>
                              <p class="title" id="title">#${hex}</p>`
        container.append(colorBox)
        colorBox.addEventListener('click', ()=> copyText(colorBox, hex))
    }
    
}

/**
 * function to genetate new color
 * 
 */

const generateColor = () => {
    let randomHex = Math.floor(Math.random() * 0xFFFFF).toString().padStart(6, '0');
    return randomHex
}

/**
 * function to copy a color text
 * 
 */

const copyText = (colorBox, hex) => {
    const titleElement = colorBox.querySelector('.title')

    navigator.clipboard.writeText(hex).then( ()=> {
        titleElement.innerHTML = "COPIED"
        setTimeout(()=>{
            titleElement.innerHTML = `#${hex}`
        }, 2000)
    });

}



colorBoxUi(generateColor)

buttonGenerate.addEventListener('click', ()=> {
    container.innerHTML = "";
    colorBoxUi(generateColor)
})
