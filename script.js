let container = document.querySelector('#container');

function createDiv() {

    for (let i = 0; i < 684; i++) {
        let div2 = document.createElement('div');
        container.appendChild(div2);
            div2.className = 'divs';
            container.appendChild(div2);
        }
        for (let j = 0; j < 684; j++) {
            let div3 = document.createElement('div');
            container.appendChild(div3);
                div3.className = 'divs';
                container.appendChild(div3);
        }
    }
createDiv();

let allDivs = document.getElementsByClassName('divs');

