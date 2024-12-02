/* Place your JavaScript in this file */

/*
the plan:
multiple choice exam since free response won't work

*/

var wordList = {
    'tacit' : 'understood or implied without being stated',
    'permit' : 'to allow to do something',
    'protestation' : 'a strong statement that something is true when other people do not believe it is true',
    'tarnish' : 'make dirty or spotty, as by exposure to air',
    'unfathomable' : 'difficult or impossible to understand',
    'prophet' : 'a person who speaks or interprets for God to other people',
    'render' : 'to cause to become; to perform',
    'palate' : 'roof of the mouth',
    'twine' : 'a lightweight cord',
    'edification' : 'improvement or enlightenment'
}

var sentenceList = {
    'Your silence may be taken as (___) agreement' : 'tacit',
    'The law does not (___) the sale of illegal drugs' : 'permit',
    'Her (___) of innocence were in vain' : "protestations",
    'Silver is (___) too easily.' : 'tarnished',
    'For some (___) reason, they installed a toilet inside the kitchen.' : 'unfathomable',
    'The (___) had a vision and shared the good news to the people of the town.' : 'prophet',
    'The dog\'s aggressive behavior (___) him nearly impossible to adopt.' : 'rendered',
    'The new flavors pleased his (___).' : 'palate',
    'The girl handed a ball of (___) to the artist.' : 'twine',
    'Art\'s main purpose is to supply moral uplift and (___).' : 'edification'
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

    let newEle = document.getElementById('m_col1').querySelector("#demo").cloneNode(true);
    newEle.id = '';
    newEle.removeAttribute('hidden');

    newEle.currentLine123 = undefined;
    newEle.connectedTo123 = undefined;

    newEle.querySelector('button').innerText = e;

    newEle.querySelector('button').addEventListener("click", (e)=>{
        if (game) {
            console.log(newEle);
            lineManager(newEle);
        }
    })

    document.getElementById('m_col1').append(newEle);

    let newEle2 = document.getElementById('m_col2').querySelector("#demo").cloneNode(true);
    newEle2.id = '';
    newEle2.removeAttribute('hidden');

    newEle2.querySelector('button').innerText = f;

    newEle2.currentLine123 = undefined;
    newEle2.connectedTo123 = undefined;

    newEle2.addEventListener("click", (e)=>{
        lineManager(newEle2);
    })

    document.getElementById('m_col2').append(newEle2);

    wordEntries.push(newEle);
    count++;
    
}

let sentencesTaken = [];
for (let i = 1; i < 6; i++) {
    let newPos = Math.floor(Math.random() * 10);
    while (sentencesTaken.indexOf(newPos) != -1) {
        newPos = Math.floor(Math.random() * 10);
    }
    sentencesTaken.push(newPos);

    document.getElementById("p_word" + i).placeholder = Object.keys(sentenceList)[newPos];
		document.getElementById("p_word" + i).hint123 = document.createElement('div');
		document.getElementById("p_word" + i).hint123.style.height = "20%";
		document.getElementById("p_word" + i).hint123.style.width = "100%";
		document.getElementById("p_word" + i).hint123.style.backgroundColor = "#ccccccaa";
		document.getElementById("p_word" + i).hint123.style.position = "sticky";
		document.getElementById("p_word" + i).hint123.style.zIndex = 9;
		document.getElementById("p_word" + i).hint123.style.display = 'flex';
		document.getElementById("p_word" + i).hint123.style.alignItems = 'center';
		document.getElementById("p_word" + i).hint123.style.flexWrap = true;
		document.getElementById("p_word" + i).hint123.setAttribute('hidden', true); //https://meowni.ca/hidden.is.a.lie.html
		
		document.getElementById("p_word" + i).hint123.toolt123 = document.createElement("h1");
		document.getElementById("p_word" + i).hint123.toolt123.innerText = document.getElementById("p_word" + i).placeholder;
		document.getElementById("p_word" + i).hint123.toolt123.style.margin = 0;
		document.getElementById("p_word" + i).hint123.toolt123.style.padding = 'auto';
		
		document.getElementById("p_word" + i).hint123.append(document.getElementById("p_word" + i).hint123.toolt123);
		document.body.append(document.getElementById("p_word" + i).hint123);
		
		document.getElementById("p_word" + i).addEventListener("focusin", (e) => {
			document.getElementById("p_word" + i).hint123.removeAttribute('hidden');
		});
		
		document.getElementById("p_word" + i).addEventListener("focusout", (e) => {
			document.getElementById("p_word" + i).hint123.setAttribute('hidden', true);
		});
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
    if (ele1.currentLine123) {
        ele1.currentLine123.remove();
    }

    if (ele1.connectedTo123) {
        ele1.connectedTo123.connectedTo123 = undefined;
    }

    if (newEle.currentLine123) {
        newEle.currentLine123.remove();
    }

    if (newEle.connectedTo123) {
        newEle.connectedTo123.connectedTo123 = undefined;
    }
		
		console.log('ele1 parent:');
		console.log(ele1.parentElement.id)

    ele1.currentLine123 = newEle.currentLine123 = makeLine(
        [ele1.querySelector('button').getBoundingClientRect()[ele1.parentElement.id == 'm_col1' ? 'right' : 'left'], (ele1.querySelector('button').getBoundingClientRect().top + ele1.querySelector('button').getBoundingClientRect().bottom)/2],
        [newEle.querySelector('button').getBoundingClientRect()[newEle.parentElement.id == 'm_col1' ? 'right' : 'left'], (newEle.querySelector('button').getBoundingClientRect().top + newEle.querySelector('button').getBoundingClientRect().bottom)/2]
    );

    ele1.connectedTo123 = newEle;
    newEle.connectedTo123 = ele1;

    ele1 = undefined;
}

// line function
//      coordinate1: [x, y]
//      coordinate2: [x, y]
function makeLine(coordinate1, coordinate2) {
/* 		let pp = document.createElement('div');
		pp.style.backgroundColor = 'black';
		pp.style.height = '10px';
		pp.style.width = '10px';
		pp.style.position = 'absolute';
		pp.style.top = `${coordinate1[1]}px`;
		pp.style.left = `${coordinate1[0]}px`;
		document.body.append(pp);
		
		pp = document.createElement('div');
		pp.style.backgroundColor = 'black';
		pp.style.height = '10px';
		pp.style.width = '10px';
		pp.style.position = 'absolute';
		pp.style.top = `${coordinate2[1]}px`;
		pp.style.left = `${coordinate2[0]}px`;
		document.body.append(pp); */
		
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
		
		console.log('nx width');
		console.log(nx.style.width.substr(0, nx.style.width.length - 2)/2);
		console.log(nx.style.width.substr(0, nx.style.width.length - 2));
		console.log(nx.style.width);
		
    nx.style.marginLeft = `-${nx.style.width.substr(0, nx.style.width.length - 2)/2}px`;

    return nx;
}

//timers and triggers
var simpleTimer = 180;
var c_timer;
var game = false;

document.body.querySelector("#b_start").addEventListener('click', function(){
    game = true;

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


// grade
function grade() {
    game = false;
    let score = 0;

    wordEntries.forEach((v, i) => {
        if (!v.connectedTo123) {
            return;
        }

        if (wordList[v.querySelector('button').innerText] == v.connectedTo123.querySelector('button').innerText) {
            console.log(`${wordList[v.querySelector('button').innerText]} == ${v.connectedTo123.querySelector('button').innerText}`);
            v.querySelector('button').style.backgroundColor = '#c1f7d6';
            v.connectedTo123.querySelector('button').style.backgroundColor = '#c1f7d6';
            score++;
        }
    });

    for (let ixe = 1; ixe < 6; ixe++) {
        document.getElementById("p_word" + ixe).disabled = true;
        if (document.getElementById("p_word" + ixe).value.trim().toLowerCase() == sentenceList[document.getElementById("p_word" + ixe).placeholder].trim().toLowerCase()) {
            score++;
            document.getElementById("p_word" + ixe).style.backgroundColor = '#c1f7d6';
        } else {
            document.getElementById("p_word" + ixe).value = `${sentenceList[document.getElementById("p_word" + ixe).placeholder].trim().toLowerCase()} (${document.getElementById("p_word" + ixe).value})`;
        }
    }


    document.body.querySelector("#t_timer").innerText = `${score}/15`;
    document.body.querySelector("#b_submit").setAttribute("disabled", "true");
    document.body.querySelector("#b_submit").innerText = 'REFRESH TO RETAKE';
}