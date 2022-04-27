const colorCount = 99;
getColors(colorCount)

async function getColors(colorCount) {
    const response = await fetch(`https://apis.scrimba.com/hexcolors?count=${colorCount}`);
    const data = await response.json();

    const colors = data.colors
    console.log(colors.length)

    displayColors(colors)
}

function displayColors(colorArr) {
    let html = '';

    const stuff = colorArr.map(color => {
        html = `<div class="color" style="background-color: ${color.value}"></div>`;
        return html;
    })

    for (let i = 0; i < stuff.length; i++) {
        html += stuff[i];
    }
    document.body.innerHTML = html
}

getColors()