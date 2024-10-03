/* Place your JavaScript in this file */

/*
special qs

pandemic spreads to everyone, true or false

posthumous gift is given before, true or false
*/

var wordList = {
    'Morph' : 'shape',
    'Vest' : 'clothes',
    'Bene' : 'good',
    'Pond' : 'weight',
    'Corp' : 'body',
    'Dorm' : 'sleep',
    'Pater' : 'father',
    'Nov' : 'new',
    'Punct' : 'point',
    'Ject' : 'throw',
    'Tion' : ['act or state', 'act', 'state'], //'tion' also means state, add something for this
    'Loco' : 'place',
    'Dox' : 'opinion',
    'Amphi' : 'both',
    'Magn' : 'great',
    'Eu' : 'good',
    'Endo' : 'within',
    'Phobia' : 'fear',
    'Ortho' : 'straight',
    'Put' : 'think',
    'Ver' : 'true',
    'Matri' : 'mother',
    'Mega' : 'large',
    'Pop' : 'people',
    'Sangui' : 'blood' 
} 

var wordEntries = [];

//set up HTML
let count = 0;
/*
Object.keys(wordList).forEach((e)=>{
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
});
*/

let positionsTaken = [];

while (count < Object.keys(wordList).length) {
    let newPosition = 0;
    
    while (positionsTaken.indexOf(newPosition) != -1) {
        newPosition = Math.ceil(Math.random * 25);
    }

    positionsTaken.push(newPosition);

    let e = wordList[Object.keys(wordList)[newPosition]]

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
var simpleTimer = 180;
var c_timer;

document.body.querySelector("#b_start").addEventListener('click', function(){
    wordEntries.forEach((e)=>{e.querySelector('input').disabled = false;})

    c_timer = setInterval(()=>{
        if (simpleTimer == 0) {
            clearInterval(c_timer);
            grade();
            return;
        }

        simpleTimer--;
        document.body.querySelector("#t_timer").innerText = `${Math.floor(simpleTimer/60)}:${(simpleTimer%60).toString().padStart(2, '0')}`;
    }, 1000)

    document.body.removeChild(document.body.querySelector("#b_start"));
});

document.body.querySelector("#b_submit").addEventListener("click", function(){
    if (simpleTimer == 180) {
        return;
    }

    clearInterval(c_timer);
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
                e.querySelector('input').value += ` (${wordList[e.querySelector('p').innerText][0]})`;
            }
            return
        }

        if (e.querySelector('input').value.toLowerCase() == wordList[e.querySelector('p').innerText]) {
            score++;
        } else {
            e.querySelector('input').style.backgroundColor = 'pink';
            e.querySelector('input').style.color = 'green';
            e.querySelector('input').style.fontWeight = '900';
            e.querySelector('input').value += ` (${wordList[e.querySelector('p').innerText]})`;
        }
    });
    document.body.querySelector("#t_timer").innerText = `${score}/25`;
    document.body.querySelector("#b_submit").setAttribute("disabled", "true");
    document.body.querySelector("#b_submit").innerText = 'REFRESH TO RETAKE';
}
