/* Place your JavaScript in this file */

/*
the plan:
multiple choice exam since free response won't work

*/

var wordList = {
    'assuage' : ['make (an unpleasant feeling) less intense)', 'make less intense'],
    'seldom' : ['not often\; rarely', 'not often', 'rarely'],
    'enable' : 'to give someone or something the authority or means to do something',
    'revelation' : 'a surprising and previously unknown fact, especially one that is made known in a dramatic way',
    'habitually' : 'by way of habit; customarily',
    'contentment' : 'a state of happiness and satisfaction',
    'teemed' : 'be full of or swarming with',
    'repertoire' : 'a stock of skills or types of behavior that a person habitually uses',
    'vapid' : 'offering nothing that is stimulating or challenging',
    'malevolent' : 'having or showing a wish to do evil to others'
} 

var wordEntries = [];

//set up HTML
let count = 0;
let positionsTaken = [];

while (count < Object.keys(wordList).length) {
    let newPosition = Math.ceil(Math.random() * Object.keys(wordList).length - 1);
    
    while (positionsTaken.indexOf(newPosition) != -1) {
        newPosition = Math.ceil(Math.random() * Object.keys(wordList).length) - 1;
    }
    console.log(newPosition);
    positionsTaken.push(newPosition);

    let e = Object.keys(wordList)[newPosition]

    var curCol = document.getElementById((count < 13) ? 'm_col1' : 'm_col2');
    console.log(curCol);
    var newEle = curCol.querySelector("#demo").cloneNode(true);
    newEle.id = '';
    newEle.removeAttribute('hidden');
    newEle.querySelector('input').disabled = true;

    newEle.querySelector('p').innerText = e;

    curCol.append(newEle);
    wordEntries.push(newEle);
    count++;
    
}

//timers and triggers
var simpleTimer = 999999999;
var c_timer;

document.body.querySelector("#b_start").addEventListener('click', function(){
    wordEntries.forEach((e)=>{e.querySelector('input').disabled = false;})

    document.body.removeChild(document.body.querySelector("#b_start"));
});

document.body.querySelector("#b_submit").addEventListener("click", function(){
    grade();
    return
})


//grading system skibidi
/*
if one does decide to update this to grade the last 5 qs using ai...
chatgpt : tell me the roots in '[word]' without explanation. just the roots.

ACTUALLY MERRIAM WEBSTER DICTIONARY API FREE WOOOOOOOOOOOOOOOOOOOO
only problem is api key securing and api key limit but yuh
*/
function grade(){
    let score = 1 - 1;
    wordEntries.forEach((e)=>{
        e.querySelector('input').setAttribute('disabled', 'true');
        e.querySelector('input').value = e.querySelector('input').value.trim();

        if (typeof wordList[e.querySelector('p').innerText] == 'object') {
            let correct = false;
            for (i in wordList[e.querySelector('p').innerText]) {
                if (e.querySelector('input').value.toLowerCase() == wordList[e.querySelector('p').innerText][i]) {
                    correct = true;
                }
            }
            if (correct) {
                score++;
            } else {
                e.querySelector('input').style.backgroundColor = 'pink';
                e.querySelector('input').style.color = 'green';
                e.querySelector('input').style.fontWeight = '900';
                e.querySelector('input').value = wordList[e.querySelector('p').innerText][0];
            }
            return
        }

        if (e.querySelector('input').value.toLowerCase() == wordList[e.querySelector('p').innerText]) {
            score++;
        } else {
            e.querySelector('input').style.backgroundColor = 'pink';
            e.querySelector('input').style.color = 'green';
            e.querySelector('input').style.fontWeight = '900';
            e.querySelector('input').value = wordList[e.querySelector('p').innerText];
        }
    });
    document.body.querySelector("#t_timer").innerText = `${score}/10`;
    document.body.querySelector("#b_submit").setAttribute("disabled", "true");
    document.body.querySelector("#b_submit").innerText = 'REFRESH TO RETAKE';
}