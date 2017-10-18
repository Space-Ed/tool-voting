import {h, render, Component} from 'preact'

class ProjectOverview extends Component {

    shouldComponentUpdate(){
        
    }

    render(props, state){
        return (
        <div class='nav'>
            <div class='nav-item'>
                <img id='github-logo-img' src='res/GitHub-Mark-64px.png' href='https://github.com/Space-Ed'></img>
                <a href='https://github.com/Space-Ed' style='position:relative; left:0'> GitHub </a>
            </div>
        </div>
        )
    }
}

window.onload = ()=>{

    render((
        <div class='preact-container'>

            <div class='intro'>
                <h1 id='title'> Edward Dalley World </h1>

                <p> Welcome to my world, here you will find record of my projects, the source code for this website can be found <a href='https://github.com/Space-Ed/portfolio'>here</a></p>

            </div>

            <ProjectOverview/>

            <div class="preview-pane">

            </div>

            <input type="number" name="sides" id="numSides-input"/>
            <input type="number" name="rolls" id="numRolls-input"/>
            <input type="button" id='roll-button' value='Roll!' />

            <div id='dice'>

            </div>
        </div>
    ), document.body )


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
