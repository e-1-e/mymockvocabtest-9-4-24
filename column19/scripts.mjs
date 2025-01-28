/* Place your JavaScript in this file */
var wordList = {
    'Ligu' : 'tongue',
    'Mot' : 'move',
    'Nav' : 'ship',
    'Und' : "wave",
    'Flect' : 'bend',
    'Coron' : 'crown',
    'Aur' : 'gold',
    'Liter' : 'letter',
    'Rat' : 'think',
    'Sis' : 'condition',
    'Par' : 'equal',
    'Mens' : 'measure',
    'Mony' : 'condition',
    'Quin' : 'five',
    'Socio' : 'society',
    'Ovi' : 'egg',
    'Phasia' : 'speech',
    'Pter' : 'wing',
    'Phen' : 'appearance',
    'Hist' : 'tissue',
    'Glott' : 'tongue',
    'Phan' : 'appearance',
    'Peri' : ['near', 'around', 'near or around'],
    'Pot' : 'drink',
    'Via' : 'road'
} 

var game = await import('../maingame.mjs');
/* Place your JavaScript in this file */
game.m_setup(wordList);