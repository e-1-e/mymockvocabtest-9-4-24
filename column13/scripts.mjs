/* Place your JavaScript in this file */
var wordList = {
    'Chrom' : 'color',
    'Form' : 'shape',
    'Sequ' : 'follow',
    'Glyc' : 'sweet',
    'Hemo' : 'blood',
    'Ultima' : 'last',
    'Infra' : 'beneath',
    'Leuko' : 'white',
    'Lys' : 'break down',
    'Meso' : 'middle',
    'Milli' : 'thousandth',
    'Mem' : 'remember',
    'Gress' : 'step',
    'Labor' : 'work',
    'Myo' : 'muscle',
    'Vacc' : 'empty',
    'Oligo' : ['few', 'small', 'few or small'],
    'Ose' : 'sugar',
    'Osis' : 'condition',
    'Tude' : 'state of',
    'Patho' : 'disease',
    'Phag' : 'eat',
    'Phor' : 'carry',
    'Phyt' : 'plant',
    'Phyll' : 'leaf'
} 

var game = await import('../maingame.mjs');
/* Place your JavaScript in this file */
game.m_setup(wordList);