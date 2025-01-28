/* Place your JavaScript in this file */
var wordList = {
    'Ante' : 'before',
    'Anti' : 'against',
    'Bi' : 'two',
    'Circum' : 'around',
    'Com' : 'together',
    'Con' : 'together',
    'De' : 'down',
    'Dis' : 'away',
    'Equi' : 'equal',
    'Extra' : 'beyond',
    'Inter' : 'between',
    'Intra' : 'within',
    'Intro' : 'into',
    'Mal' : 'bad',
    'Mis' : 'bad',
    'Non' : 'not',
    'Post' : 'after',
    'Pre' : 'before',
    'Semi' : 'half',
    'Sub' : 'under',
    'Super' : 'over',
    'Sym' : 'together',
    'Syn' : 'together',
    'Tri' : 'three',
    'Un' : 'not'
} 

var game = await import('../maingame.mjs');
/* Place your JavaScript in this file */
game.m_setup(wordList);