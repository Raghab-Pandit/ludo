// Logic

let ludoBoard= [
        {id:0, position:[null, null, null, null], safe: [null, null, null, null]},
        {id:1, position:[null, null, null, null], safe: [null, null, null, null]},
        {id:2, position:[null, null, null, null], safe: [null, null, null, null]},
        {id:3, position:[null, null, null, null], safe: [null, null, null, null]}
]

let dice;
let turn=0;

document.getElementById('button').addEventListener("click", ()=>{
    dice= Math.floor(Math.random()*6) +1
    console.log(dice)
    assignPosition()
})


function changeTurn(){
    if(dice!==6){
    if(turn>=ludoBoard.length-1){
        turn=0;
    }
    else{
        turn++;
    }
}
}

function assignPosition(){
    const posTotal= ludoBoard[turn].position.filter(p=> p!==null)

    if(posTotal.length===0){
        if(dice===1 || dice===6){
        const identify= parseInt(window.prompt('Enter a Num between 0-3'));
        ludoBoard[turn].position[identify]= 0;
        changeTurn()
        }
        else{
            changeTurn()
        }
    }
    else if(posTotal.length===1){
        ludoBoard[turn].position = ludoBoard[turn].position.map(pos => pos !== null ? pos + dice : null);
        changeTurn()
    }
    else if((1<posTotal.length)<4 && (dice===1 || dice===6)){
        const identify= parseInt(window.prompt('Enter a Num between remaining ones or enter -1 to choose outed nums'));
        if(identify>=0){
        ludoBoard[turn].position[identify]= 0;
        }
        else{
            const identify2= parseInt(window.prompt('Enter a Num which are out'));
            ludoBoard[turn].position[identify2]= ludoBoard[turn].position[identify] + dice;
        }
        changeTurn()
    }
    else{
        const identify= parseInt(window.prompt('Enter a Num which are out'));
        ludoBoard[turn].position[identify]= ludoBoard[turn].position[identify] + dice;
        changeTurn()
    }

    console.log('LudoBoard:',ludoBoard);
    console.log('Turn:',turn)
}