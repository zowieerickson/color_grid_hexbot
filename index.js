async function getColors() {
    const response = await fetch(`https://apis.scrimba.com/hexcolors?count=15`);
    const data = await response.json();

    const colors = data.colors

    console.log(colors);
}

function displayColors() {
    const html = ``;
    
}

getColors()