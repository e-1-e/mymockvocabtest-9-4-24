/* Place your JavaScript in this file */
var wordList = {
    'Tropo' : 'turn',
    'Gastro' : 'stomach',
    'Arthro' : 'joint',
    'Ventri' : 'belly',
    'Dors' : 'back',
    'Macro' : 'large',
    'Dextro' : 'right',
    'Brachy' : 'short',
    'Brachio' : 'arm',
    'Branchio' : 'gills',
    'Kin' : 'motion',
    'Phylo' : 'kind',
    'Blasto' : 'embryo',
    'Dactyl' : 'finger',
    'Phos' : 'light',
    'Gon' : 'angle',
    'Lite' : ['mineral', 'fossil', 'mineral or fossil', 'mineral/fossil'],
    'Vore' : 'eating',
    'Holo' : 'whole',
    'Haplo' : 'single',
    'Opla' : 'sight',
    'Lent' : 'full of',
    'Ef' : 'out',
    'lum' : 'an element',
    'Dicho' : 'in two parts'
} 

var game = await import('../maingame.mjs');
/* Place your JavaScript in this file */
game.m_setup(wordList);