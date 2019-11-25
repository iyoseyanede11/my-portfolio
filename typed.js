let text1 = 'frontend web developer';
let text2 = 'software development enthusiast';
let text3 = 'problem solver';
let i = 0;
let count = 0;


let textArray = [text1,text2,text3];
let numberOfIterations = textArray.length;
let startingIndex = 0;

let typeText = document.querySelector('#type-writer');

function startOver(){
    startingIndex = 0;
    startTyping()
}

function startTyping(){
    typeText.style.borderRight = '2px solid #fff'
    typeText.style.paddingRight = '2px'
        if(i < textArray[startingIndex].length){
            typeText.innerHTML += textArray[startingIndex].charAt(i);
            i++
            setTimeout(startTyping, 100)
        } else{
            setTimeout(() => {
                reverse();
                function reverse(){
                    if(i === 0 && startingIndex < numberOfIterations - 1){
                        typeText.innerHTML = '';
                        startingIndex++;
                        startTyping();  
                    }
                    else if (i > 0){
                        typeText.innerHTML = textArray[startingIndex].slice(0,i);
                        i--;
                        setTimeout(reverse, 100)
                    }
                    else if(startingIndex === numberOfIterations - 1){
                        typeText.innerHTML = ''
                        startingIndex = 0;
                        startOver()
                    }
                }
            }, 800)
        }
    

}

window.addEventListener('load', startTyping())

