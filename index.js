async function getColors() {
    const response = await fetch(`https://apis.scrimba.com/hexcolors?count=250`);
    const data = await response.json();

    const colors = data.colors

    displayColors(colors)
}

function displayColors(colorArr) {
    console.log(colorArr)
    let html = '';

    const stuff = colorArr.map(color => {
        // console.log(color)
        html = `<div class="color" style="background-color: ${color.value}">${color.value}</div>`;
        return html;
    })

    for (let i = 0; i < stuff.length; i++) {
        html += stuff[i];
        console.log(html)
    }
    document.body.innerHTML = html
}

getColors()