/* Place your JavaScript in this file */
var wordList = {
    'Vita':'life',
    'Demo' : 'people',
    'Stereo' : 'solid',
    'Ism' : 'doctrine',
    'Cogn' : 'know',
    'Sur' : 'over',
    'Alter' : 'other',
    'Astr' : 'star',
    'Dyna' : 'power',
    'Chron' : 'time',
    'Hyper' : 'over',
    'Luna' : 'moon',
    'Octa' : 'eight',
    'Gyro' : 'turn',
    'Contra' : 'against',
    'Geo' : 'earth',
    'Helio' : 'sun',
    'Thermo' : 'heat',
    'Tetra' : 'four',
    'Meter' : 'measure',
    'Scope' : 'look',
    'Son' : 'sound',
    'Dec' : 'ten',
    'Stell' : 'star',
    'Amat' : 'love'
} 

var wordEntries = [];

//set up HTML
let count = 0;
Object.keys(wordList).forEach((e)=>{
    var curCol = document.getElementById((count < 13) ? 'm_col1' : 'm_col2');
    console.log(curCol);
    var newEle = curCol.querySelector("#demo").cloneNode(true);
    newEle.id = '';
    newEle.removeAttribute('hidden');

    newEle.querySelector('p').innerText = e;

    curCol.append(newEle);
    wordEntries.push(newEle);
    count++;
});

//timers and triggers
var simpleTimer = 180;
var c_timer;

document.body.querySelector("#b_start").addEventListener('click', function(){
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
    document.body.querySelector("#b_submit").setAttribute("disabled", "true")
    grade();
    return
})


//grading system skibidi
function grade(){
    let score = 1 - 1;
    wordEntries.forEach((e)=>{
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
            }
            return
        }

        if (e.querySelector('input').value.toLowerCase() == wordList[e.querySelector('p').innerText]) {
            score++;
        } else {
            e.querySelector('input').style.backgroundColor = 'pink';
        }
    });
    document.body.querySelector("#t_timer").innerText = `${score}/25`
    console.log(score);
}
