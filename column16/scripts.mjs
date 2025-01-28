/* Place your JavaScript in this file */
var wordList = {
    'Anglo' : 'english',
    'Saur' : 'lizard',
    'Pithec' : 'ape',
    'Calli' : 'beautiful',
    'Austro' : 'south',
    'Cephalo' : 'head',
    'Chiro' : 'hand',
    'Caust' : 'burn',
    'Terr' : 'land',
    'Cata' : 'down',
    'Jur' : 'swear',
    'Flu' : 'flow',
    'Here' : 'stick',
    'Pos' : 'put',
    'Mund' : 'world',
    'Cracy' : 'government',
    'Mania' : 'madness',
    'Ize' : "make",
    'Antho' : 'flower',
    'Algia' : 'pain',
    'Somn' : 'sleep',
    'Quadr' : 'four',
    'Err' : 'wander',
    'Sine' : 'without',
    'Ist' : 'one who'
} 

var game = await import('../maingame.mjs');
/* Place your JavaScript in this file */
game.m_setup(wordList);