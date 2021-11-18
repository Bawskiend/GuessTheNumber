'use strict'
let btn = document.querySelector('.main__button');
function randomInt(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
btn.addEventListener('click',GuessTheNumber)
function GuessTheNumber(){
    let NumberToGuess = randomInt(1,100);
    console.log(NumberToGuess);
    let input = document.querySelector('.main__input');
    let text = document.querySelector('.main__text')
    text.classList.add('active')
    text.innerHTML = 'Угадай число:'
input.addEventListener('blur',function(){
    if(input.value != ''){
        let EnteredNumber = Number(input.value);
       if(EnteredNumber > NumberToGuess){
           text.innerHTML = 'Введите число поменьше';

        }
        else if(EnteredNumber < NumberToGuess){
            text.innerHTML = 'Введите число побольше';
 
        }
        else if(EnteredNumber < NumberToGuess){
            text.innerHTML = 'Введите число побольше';
 
        }
        else if(EnteredNumber == NumberToGuess){
            text.innerHTML = 'Вы угадали, это было число '+NumberToGuess;
 
        }
         
    }
    })

}