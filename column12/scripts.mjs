/* Place your JavaScript in this file */
var wordList = {
    'Mel' : 'song',
    'Aden' : 'gland',
    'Aer' : 'air',
    'Alb' : 'white',
    'Ase' : 'enzyme',
    'Epi' : 'on',
    'Hum' : 'earth',
    '-be' : 'life',
    'Bon' : 'good',
    'Struct' : 'build',
    'Chlor' : 'green',
    'Cyan' : 'blue',
    'An' : "without",
    'Diplo' : 'double',
    'Dys' : "bad",
    'enter' : 'intestine',
    'Erythro' : 'red',
    'Idio' : 'peculiar',
    'Eco' : 'house',
    'Emia' : 'blood',
    'Ab' : 'away',
    'Fil' : 'thread',
    'Im' : 'not',
    'Exo' : "out",
    'Cyt' : 'cell'
} 

var game = await import('../maingame.mjs');
/* Place your JavaScript in this file */
game.m_setup(wordList);