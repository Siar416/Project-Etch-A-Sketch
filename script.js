let container = document.querySelector('#container');

let div = document.createElement('div');
div.className = 'divs';
container.appendChild(div);

function createDiv() {
    let div1 = document.createElement('div');
    div1.className = 'divs';
    container.appendChild(div1);

    for (let i = 0; i < 100; i++) {
        let div2 = document.createElement('div');
        div2.className = 'divs';
        container.appendChild(div2);
    }
}

createDiv();



