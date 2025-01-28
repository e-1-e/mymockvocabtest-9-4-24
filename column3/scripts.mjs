/* Place your JavaScript in this file */
var wordList = {
    'Homo': 'same',
    'Spec' : 'look',
    'Duct' : 'lead',
    'Fer' : 'carry',
    'Pend' : 'hang',
    'Micro' : 'small',
    'Hydro' : 'water',
    'Photo' : 'light',
    'Pan' : 'all',
    'Penta' : 'five',
    'Tele' : 'far',
    'Vid' : 'look',
    'Omni' : 'all',
    'Ex' : 'out',
    'Poly' : 'many',
    'Re' : 'again',
    'Hypo' : 'under',
    'Pseudo' : 'false',
    'Neuro' : 'nerve',
    'Tomy' : 'cut',
    'Hema' : 'blood',
    'Proto' : 'first',
    'Phon' : 'sound',
    'Mono' : 'one',
    'Viv' : 'life'
} 

var game = await import('../maingame.mjs');
/* Place your JavaScript in this file */
game.m_setup(wordList);