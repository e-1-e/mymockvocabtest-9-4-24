/* Place your JavaScript in this file */

//import * as game from "../maingame.mjs";

var game = await import('../maingame.mjs');
/* Place your JavaScript in this file */
var wordList2 = {
    'Numer' : 'number',
    'Fort' : 'strong',
    'Osteo' : 'bone',
    'Ormith' : 'bird',
    'Polis' : 'city',
    'Fus' : 'pour',
    'Ego' : 'i',
    'Spir' : 'breathe',
    'Dia' : 'across',
    'Acr' : 'sharp',
    'Acro' : 'high',
    'Culp' : 'blame',
    'Derm' : 'skin',
    'Zo' : 'animal',
    'Per' : 'through',
    'Pac' : 'peace',
    'Brev' : 'short',
    'Necro' : 'death',
    'Urb' : 'city',
    'Pugn' : 'fight',
    'Ecto' : 'outer',
    'Plasto' : 'molded',
    'Agog' : 'leader',
    'Cle': 'small',
    'Il' : 'not'
} 
game.m_setup(wordList2);