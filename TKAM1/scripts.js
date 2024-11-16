/* Place your JavaScript in this file */

/*
the plan:
multiple choice exam since free response won't work

*/

var wordList = {
    'assuage' : 'make (an unpleasant feeling) less intense)',
    'seldom' : 'not often\; rarely',
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
let positionsTaken2 = [];

while (count < Object.keys(wordList).length) {
    let newPosition = Math.ceil(Math.random() * Object.keys(wordList).length - 1);
    let newPosition2 = Math.ceil(Math.random() * Object.keys(wordList).length - 1);
    
    while (positionsTaken.indexOf(newPosition) != -1) {
        newPosition = Math.ceil(Math.random() * Object.keys(wordList).length) - 1;
    }
    while (positionsTaken2.indexOf(newPosition2) != -1) {
        newPosition2 = Math.ceil(Math.random() * Object.keys(wordList).length) - 1;
    }

    console.log(newPosition);
    positionsTaken.push(newPosition);

    let e = Object.keys(wordList)[newPosition]
    let f = Object.values(wordList)[newPosition2];

    var newEle = document.getElementById('m_col1').querySelector("#demo").cloneNode(true);
    newEle.id = '';
    newEle.removeAttribute('hidden');

    newEle.querySelector('button').innerText = e;

    document.getElementById('m_col1').append(newEle);

    var newEle2 = document.getElementById('m_col2').querySelector("#demo").cloneNode(true);
    newEle2.id = '';
    newEle2.removeAttribute('hidden');

    newEle2.querySelector('button').innerText = f;

    document.getElementById('m_col1').append(newEle2);

    wordEntries.push(newEle);
    count++;
    
}

