/* Place your JavaScript in this file */

/*
special qs

pandemic spreads to everyone, true or false

posthumous gift is given before, true or false
*/

var specialAnswers = {
    'p_word2': true,
    'p_word4': false
}

var wordList = {
    'Morph' : 'shape',
    'Vest' : 'clothes',
    'Bene' : 'good',
    'Pond' : 'weight',
    'Corp' : 'body',
    'Dorm' : 'sleep',
    'Pater' : 'father',
    'Nov' : 'new',
    'Punct' : 'point',
    'Ject' : 'throw',
    'Tion' : ['act or state', 'act', 'state'], //'tion' also means state, add something for this
    'Loco' : 'place',
    'Dox' : 'opinion',
    'Amphi' : 'both',
    'Magn' : 'great',
    'Eu' : 'good',
    'Endo' : 'within',
    'Phobia' : 'fear',
    'Ortho' : 'straight',
    'Put' : 'think',
    'Ver' : 'true',
    'Matri' : 'mother',
    'Mega' : 'large',
    'Pop' : 'people',
    'Sangui' : 'blood' 
} 

var game = await import('../maingameAlt1.mjs');

game.m_setup(wordList, specialAnswers);