//import * as game from "../maingame.mjs";

var wordList = {
    'Path' : 'feeling',
    'A' : 'not',
    'Nomy' : 'law',
    'Fid' : 'faith',
    'Caco' : 'bad',
    'Hetero' : 'different',
    'Sci' : 'know',
    'Graph' : 'write',
    'Lat' : 'side',
    'Lith' : 'rock',
    'Tract' : 'pull',
    'In' : 'not',
    'Co' : 'together',
    'Phile' : "love",
    'Ine' : 'nature of',
    'Ar' : 'relating to',
    'Hexa' : 'six',
    'Fract' : 'break',
    'Platy' : 'flat',
    'Theo' : 'god',
    'Fin' : 'end',
    'Hedron' : 'sided object',
    'Ambul' : 'walk',
    'Ous': 'full of',
    'Topo' : 'place'
} 

var game = await import('../maingame.mjs');
/* Place your JavaScript in this file */
game.m_setup(wordList);