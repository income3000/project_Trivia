const endBtn = document.getElementById('end');
const skip = document.getElementById('skip')
const form = document.querySelector('form')
const trueBtn = document.getElementById('trueb')
const end = document.getElementById('end')
const falseBtn = document.getElementById('falseb')
const next = document.getElementById("nextB")
const score = document.createElement('div')
const scoretab = document.getElementById('scoreTab')
const restart = document.getElementById('restart')
const answer = document.getElementById('answer')
score.setAttribute('id', 'score')
let scoreNum = 0;
score.innerHTML = scoreNum;
scoretab.appendChild(score);
const sports_API = `https://opentdb.com/api.php?amount=50&type=boolean`
let data;
let index = 0;

    const endGameWIN = () => {
        answer.innerHTML = 'YOU WON'
        score.innerHTML = 0
        document.querySelector('#question').innerHTML = "Question:"
        document.querySelector('#category').innerHTML = "Category:"
        document.querySelector('#difficulty').innerHTML = "Difficulty:"
        }  

    const endGame = () => {
            answer.innerHTML = 'GAME OVER'
            score.innerHTML = 0
            document.querySelector('#question').innerHTML = "Question:"
            document.querySelector('#category').innerHTML = "Category:"
            document.querySelector('#difficulty').innerHTML = "Difficulty:"
            }  

    const endGameLOSE = () => {
        answer.innerHTML = 'YOU LOST'
        score.innerHTML = 0
        document.querySelector('#question').innerHTML = "Question:"
        document.querySelector('#category').innerHTML = "Category:"
        document.querySelector('#difficulty').innerHTML = "Difficulty:"
        }  
    async function sendApiRequest(){
        let response = await fetch(sports_API);
        //console.log(response)
        data = await response.json()
        
        useAPIData(data)
    }

    function rsfunk(event) {
        scoreNum = 0
        score.innerHTML = 0
        answer.innerHTML = "NEW GAME"
        useAPIData(data)
    }


    window.onload = sendApiRequest
    async function sendApiRequest(){
        let response = await fetch(sports_API);
        data = await response.json()
        useAPIData(data)
        alert('DO YOU WANT TO PLAY A GAME?')
    }
    let correctA ;

    function useAPIData(data){
        document.querySelector('#question').innerHTML = `Question: ${data.results[0].question}`
        document.querySelector('#category').innerHTML = `${data.results[0].category}`
        document.querySelector('#difficulty').innerHTML = `${data.results[0].difficulty.toUpperCase()}`
        correctA = data.results[0].correct_answer
        console.log(correctA);
    }
    const nextFunk = (event)=> {
        index += 1
        document.querySelector('#question').innerHTML = `${data.results[index].question}`
        document.querySelector('#category').innerHTML = `${data.results[index].category}`
        document.querySelector('#difficulty').innerHTML = `${data.results[index].difficulty}`
        correctA = data.results[index].correct_answer
        console.log(correctA)
        }
    trueRightAnswer = () => {
        //const trueBtn = true;
            if (correctA == 'True'){
                scoreNum += 1
                answer.innerHTML = 'CORRECT'
                } 
            else {
                scoreNum -= 1
                answer.innerHTML = 'INCORRECT'
                
            }
        
        score.innerHTML = scoreNum
            if (scoreNum == 5){
                answer.innerHTML = 'YOU WON'
                endGameWIN()
                }
            if(scoreNum == -3){
                endGameLOSE()
            }
            nextFunk()
                
    }

    falseRightAnswer = () => {

            if (correctA == 'False'){
                scoreNum += 1
                answer.innerHTML = 'CORRECT'
            } 
            else {
                answer.innerHTML = 'INCORRECT'
                scoreNum -= 1
                }
        
        score.innerHTML = scoreNum
            if (scoreNum == 5){
            endGameWIN()
            }
            if(scoreNum == -3){
                endGameLOSE()
            }
            nextFunk()
            
    }





trueBtn.addEventListener("click", trueRightAnswer)
falseBtn.addEventListener("click", falseRightAnswer)
end.addEventListener('click', endGame)
next.addEventListener("click", nextFunk)
restart.addEventListener("click", rsfunk)