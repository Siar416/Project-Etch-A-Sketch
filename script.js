let container = document.querySelector('#container');
let allDivs = document.getElementsByClassName('divs');
let resetBTN = document.getElementById('reset');
let colorFul = document.getElementById('colorful');
let clear = document.getElementById('clear');

function createDiv() {
    for (let i = 0; i < 500; i++) {
        let div2 = document.createElement('div');
        container.appendChild(div2);
            div2.className = 'divs';
            container.appendChild(div2);
        }
        for (let j = 0; j < 500; j++) {
            let div3 = document.createElement('div');
            container.appendChild(div3);
                div3.className = 'divs';
                container.appendChild(div3);
        }
    }

createDiv();

// default
for(let i = 0; i < allDivs.length; i++) {
    allDivs[i].onmouseenter = function(e) {
        e.target.style.backgroundColor = 'grey';
    }
}

// reset button (figured it out on my own - super proud of myself - 8/10/2021)
for(let i = 0; i < allDivs.length; i++) {
    resetBTN.addEventListener('click', () => {
        allDivs[i].style.backgroundColor = 'white';
        allDivs[i].onmouseenter = function(e) {
            e.target.style.backgroundColor = 'grey';
        }
    });
}

// colorful button
for (let i = 0; i < allDivs.length; i++) {
    colorFul.addEventListener('click', () =>{
        allDivs[i].onmouseenter = function(e) {
            e.target.style.backgroundColor = randomColors();
        }
    });
}

// random color picker I made with knowledge from last project - used the below randomcolor generator instead from stack overflow

/*function randomColor() {
    let array = ['red', 'green', 'blue'];
    let random = Math.floor(Math.random()*3);
    return array[random];
}*/
// random color generator 
function randomColors() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}



