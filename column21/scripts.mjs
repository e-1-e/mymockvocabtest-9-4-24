/* Place your JavaScript in this file */
var wordList = {
    'Mollify' : 'make soft',
    'Ichthyologist' : 'fish scientist',
    'Polyglot' : 'multi-lingual',
    'Diaphanous' : 'semitransparent',
    'Somniferous' : 'bringing sleep',
    'Sinecure' : 'an easy lucrative job',
    'Soliloquy' : 'speech to onself',
    'Adherent' : 'supporter',
    'Adjure' : 'renounce',
    'Caustic' : 'burning',
    'Confluence' : 'flowing together',
    'Depose' : 'topple from power',
    'Egomania' : 'self-obsession',
    'Egregious' : 'blatant',
    'Analgesic' : 'painkiller',
    'Chiromancy' : 'palm reading',
    'Oligarchy' : 'government by a few',
    'Intractable' : 'stubborn',
    'Intransigient' : 'not compromising',
    'Perfidious' : 'treacherous',
    'Perspicuous' : 'brilliantly clear',
    'Ingenuous' : 'innocent and naive',
    'Circumlocution' : 'talking in circles',
    'Gregarious' : 'sociable',
    'Discursive' : 'rambling'
} 

var game = await import('../maingame.mjs');
/* Place your JavaScript in this file */
game.m_setup(wordList);