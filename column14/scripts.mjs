/* Place your JavaScript in this file */
var wordList = {
    'Pleo' : 'more',
    'Soror' : 'sister',
    '-a' : 'plural',
    'Val' : 'worth',
    'Para' : 'beside',
    'Dom' : 'rule',
    'Erg' : 'work',
    'Rhiz' : 'root',
    'Sapro' : 'rotten',
    'Schizo' : 'divide',
    'Hippo' : 'horse',
    'Som' : 'body',
    'Spor' : 'seed',
    'Sta' : 'stop',
    'Rhodo' : 'rose',
    'Taxis' : 'arrangement',
    'Vol' : "will",
    'Frat' : 'brother',
    'Trich' : 'hair',
    'Troph' : 'nourishment',
    'Tox' : 'poison',
    'Sect' : 'cut',
    'Zygo' : 'yoke',
    'Zym' : "ferment",
    'Pod' : 'foot'
} 

var game = await import('../maingame.mjs');
/* Place your JavaScript in this file */
game.m_setup(wordList);