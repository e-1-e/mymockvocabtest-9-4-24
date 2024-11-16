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
    positionsTaken2.push(newPosition2);

    let e = Object.keys(wordList)[newPosition]
    let f = Object.values(wordList)[newPosition2];

    var newEle = document.getElementById('m_col1').querySelector("#demo").cloneNode(true);
    newEle.id = '';
    newEle.removeAttribute('hidden');

    newEle.querySelector('button').innerText = e;

    newEle.addEventListener("click", (e)=>{
        lineManager(newEle);
    })

    document.getElementById('m_col1').append(newEle);

    var newEle2 = document.getElementById('m_col2').querySelector("#demo").cloneNode(true);
    newEle2.id = '';
    newEle2.removeAttribute('hidden');

    newEle2.querySelector('button').innerText = f;

    newEle2.addEventListener("click", (e)=>{
        lineManager(newEle2);
    })

    document.getElementById('m_col2').append(newEle2);

    wordEntries.push(newEle);
    count++;
    
}

// selection manager bc too lazy and bc organization haha
var ele1 = undefined;

// line manager
//      newEle: element (the answer choices in matching game)
function lineManager(newEle) {
    if (!ele1) {
        ele1 = newEle;
        ele1.querySelector('button').style.borderStyle = 'dotted';
        console.log(ele1);
        return;
    }
    ele1.querySelector('button').style.borderStyle = 'solid';
    makeLine(
        [ele1.getBoundingClientRect().right, (ele1.getBoundingClientRect().top + ele1.getBoundingClientRect().bottom)/2],
        [newEle.getBoundingClientRect().left, (newEle.getBoundingClientRect().top + newEle.getBoundingClientRect().bottom)/2]
    );

    ele1 = undefined;
}

// line function
//      coordinate1: [x, y]
//      coordinate2: [x, y]
function makeLine(coordinate1, coordinate2) {
    let nx = document.createElement('div');
    nx.style.backgroundColor = 'black';
    nx.style.height = '5px';
    nx.style.width = `${Math.hypot((coordinate2[0]-coordinate1[0]), (coordinate2[1]-coordinate1[1]))}px`;
    //nx.style.width = '5px';
    
    nx.style.marginTop = `-${nx.style.height/2}px`;
    nx.style.position = 'absolute';
    nx.style.rotate = `${Math.atan((coordinate2[1] - coordinate1[1])/(coordinate2[0]-coordinate1[0]))}rad`;
    nx.style.top = `${(coordinate2[1]+coordinate1[1])/2}px`;
    nx.style.left = `${(coordinate2[0]+coordinate1[0])/2}px`;
    
    document.body.append(nx);
    nx.style.marginLeft = `-${nx.style.width.substr(0, nx.style.width.length - 3)/2}px`;

    return nx;
}
