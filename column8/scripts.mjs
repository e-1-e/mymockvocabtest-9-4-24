/* Place your JavaScript in this file */

//import * as game from "../maingame.mjs";

var game = await import('../maingame.mjs');
/* Place your JavaScript in this file */
var wordList2 = {
    'Sed' : 'sit',
    'Leg' : 'read',
    'Anim' : 'mind',
    'Tort' : 'twist',
    'Nym' : 'name',
    'Sanct' : 'holy',
    'Meta' : 'change',
    'Petr' : 'rock',
    'Mir' : 'wonder',
    'Man' : 'hand',
    'Rect' : 'right',
    'Volv' : 'roll',
    'Demi' : 'half',
    'Retro' : 'backward',
    'Sens' : 'feel',
    'Fy' : 'make',
    'Ocul' : 'eye',
    'Cur': 'care for',
    'Ultra' : 'beyond',
    'Oid' : 'appearance',
    'Gest' : 'carry',
    'Apt' : 'fit',
    'Tact' : 'touch',
    'Voc' : 'voice',
    'Rid' : 'laugh'
} 

game.m_setup(wordList2);