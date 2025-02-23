/* Place your JavaScript in this file */
var wordList = {
    'Path' : 'feeling',
    'A' : 'not',
    'Nomy' : 'law',
    'Fid' : 'faith',
    'Caco' : 'bad',
    'Hetero' : 'different',
    'Sci' : 'know',
    'Graph' : 'write',
    'Lat' : 'side',
    'Lith' : 'rock',
    'Tract' : 'pull',
    'In' : 'not',
    'Co' : 'together',
    'Phile' : "love",
    'Ine' : 'nature of',
    'Ar' : 'relating to',
    'Hexa' : 'six',
    'Fract' : 'break',
    'Platy' : 'flat',
    'Theo' : 'god',
    'Fin' : 'end',
    'Hedron' : 'sided object',
    'Ambul' : 'walk',
    'Ous': 'full of',
    'Topo' : 'place'
} 

var wordEntries = [];

//set up HTML
let count = 0;

let positionsTaken = [];

while (count < Object.keys(wordList).length) {
    let newPosition = Math.ceil(Math.random() * 24);
    
    while (positionsTaken.indexOf(newPosition) != -1) {
        newPosition = Math.ceil(Math.random() * 25) - 1;
    }

    newPosition = count;
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
