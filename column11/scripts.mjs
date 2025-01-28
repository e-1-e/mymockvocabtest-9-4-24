/* Place your JavaScript in this file */
var wordList = {
    '-i' : 'plural',
    'Jus' : 'law',
    'Lum' : 'light',
    'Ann' : 'year',
    'Apo' : ['away', 'up', 'away or up'],
    'Sen' : 'old',
    'Sol' : 'alone',
    'Bas' : 'low',
    'Rogat' : 'ask',
    'Parl' : 'speak',
    'Potent' : 'power',
    'Surg' : 'rise',
    'Log' : ['word or reason', 'reason', 'word'],
    'Gram' : 'writing',
    'Cant' : 'sing',
    'Reg' : 'rule',
    'Pro' : 'forward',
    'Gyn' : 'woman',
    'Ag' : 'to do',
    'Act' : 'to do',
    'Mob' : "make",
    'Sess' : 'sit',
    'Fic' : 'make',
    'Nounce' : 'tell',
    'Andro' : 'man'
} 

var game = await import('../maingame.mjs');
/* Place your JavaScript in this file */
game.m_setup(wordList);