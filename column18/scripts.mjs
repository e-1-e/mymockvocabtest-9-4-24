/* Place your JavaScript in this file */
var wordList = {
    'Ven' : 'come',
    'Pulse' : 'drive',
    'Calor' : 'heat',
    'Sol' : 'sun',
    'Strat' : 'layer',
    'Nuc' : 'center',
    'Sat' : 'enough',
    'Protero' : 'early',
    'Mont' : 'mountain',
    'Kilo' : 'thousand',
    'Myraid' : 'many',
    'Tachy' : "quick",
    'Fiss' : 'split',
    'Cumu' : 'heaped',
    'Metero' : 'high',
    'Hibern' : 'winter',
    'Di' : 'two',
    'Bath' : 'deep',
    'Cirr' : 'hair',
    'Grav' : 'heavy',
    'Solv' : 'loosen',
    'Opthal' : 'eye',
    'Oma' : 'tumor',
    'Rub' : 'red',
    'Ichthy' : 'fish'
} 

var game = await import('../maingame.mjs');
/* Place your JavaScript in this file */
game.m_setup(wordList);