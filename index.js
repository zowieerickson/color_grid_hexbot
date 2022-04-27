async function getColors() {
    const response = await fetch(`https://apis.scrimba.com/hexcolors?count=250`);
    const data = await response.json();

    const colors = data.colors

    displayColors(colors)
}

function displayColors(colorArr) {
    let html = '';

    const stuff = colorArr.map(color => {
        html = `<div class="color" style="background-color: ${color.value}"><p>${color.value}</p></div>`;
        return html;
    })

    for (let i = 0; i < stuff.length; i++) {
        html += stuff[i];
    }
    document.body.innerHTML = html
}

getColors()