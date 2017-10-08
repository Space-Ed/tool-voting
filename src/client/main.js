


window.onload = ()=>{

    let inputSides = document.getElementById('numSides-input')
    let inputRolls = document.getElementById('numRolls-input')
    let button = document.getElementById('roll-button')
    let results = document.getElementById('dice')

    function updateDice (response) {
        results.childNodes.forEach((node)=>{
            results.removeChild(node)
        })

        response.data.rollDice.forEach((value, i)=>{
            let dice = document.createElement('p')
            dice.innerText = `die No: ${i} value:${value}`
            results.appendChild(dice)
        })
    }

    button.onclick = () => {
        let dice = Number.parseInt(inputRolls.value)
        let sides = Number.parseInt(inputSides.value)

        console.log(`dice: ${dice} sides: ${sides}`)

        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        
        xhr.open("POST", "/api");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onload = function () {
            updateDice(xhr.response)
        }
        
        var query = `query RollDice($dice: Int!, $sides: Int) {
          rollDice(numDice: $dice, numSides: $sides)
        }`;
        
        xhr.send(JSON.stringify({
            query: query,
            variables: { 
                dice: dice, 
                sides: sides
            },
        }));
    }

}
