let container = document.querySelector('#container');
let allDivs = document.getElementsByClassName('divs');

function createDiv() {

    for (let i = 0; i < 1406; i++) {
        let div2 = document.createElement('div');
        container.appendChild(div2);
            div2.className = 'divs';
            container.appendChild(div2);
        }
        for (let j = 0; j < 1406; j++) {
            let div3 = document.createElement('div');
            container.appendChild(div3);
                div3.className = 'divs';
                container.appendChild(div3);
        }
    }
createDiv();

for(let i = 0; i < allDivs.length; i++) {
    allDivs[i].onmouseenter = function(e) {
        e.target.style.backgroundColor = 'grey';
    }
}
