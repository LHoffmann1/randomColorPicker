
document.addEventListener('DOMContentLoaded', doAfterDOMLoads);

function doAfterDOMLoads(){
    let btn = document.getElementById("button");
    btn.addEventListener('click', randomColor);
}

function randomColor(){
    const text = document.querySelectorAll('.color-text')
    const block = document.querySelectorAll('.block');
    const letters = [0,1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F']
    let output = '#';
    
    console.log(output);
    for(let i = 0; i<block.length; i++){
        for(let i = 0; i <6;i++){
            output += letters[Math.floor(Math.random() * 15)];
        }
        text[i].innerText = output;
        block[i].style.backgroundColor = output;
        output = "#";
        }
        return output;
    }
        
    
    
