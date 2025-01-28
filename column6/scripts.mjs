/* Place your JavaScript in this file */

//import * as game from "../maingame.mjs";

var game = await import('../maingame.mjs');
/* Place your JavaScript in this file */
var wordList2 = {
    'Germ': ['vital', 'related', 'vital or related'],
    'Greg' : 'group',
    'Mar' : 'sea',
    'Prim' : 'first',
    'Pyro' : 'fire',
    'Clam' : 'cry out',
    'Plu' : 'more',
    'Tang' : 'touch',
    'String' : 'bind',
    'Liber' : 'free',
    'Junct' : 'join',
    'Clud' : 'close',
    'Se' : 'apart',
    'Trib' : 'pay',
    'Dign' : 'worthy',
    'Luc' : 'light',
    'Rupt' : 'break',
    'Grat' : 'pleasing',
    'Medi' : 'middle',
    'Soph' : 'wisdom',
    'Curr' : 'run',
    'Tempor' : 'time',
    'Migr' : 'wander',
    'Trans' : 'across',
    'Gamy' : 'marriage'
} 

game.m_setup(wordList2);