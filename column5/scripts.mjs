/* Place your JavaScript in this file */

/*
decade = 100

democracy = king
*/

var game = await import('../maingameAlt1.mjs');

var specialAnswers = {
    'p_word2': false,
    'p_word4': false
}

var wordList = {
    'Vita':'life',
    'Demo' : 'people',
    'Stereo' : 'solid',
    'Ism' : 'doctrine',
    'Cogn' : 'know',
    'Sur' : 'over',
    'Alter' : 'other',
    'Astr' : 'star',
    'Dyna' : 'power',
    'Chron' : 'time',
    'Hyper' : 'over',
    'Luna' : 'moon',
    'Octa' : 'eight',
    'Gyro' : 'turn',
    'Contra' : 'against',
    'Geo' : 'earth',
    'Helio' : 'sun',
    'Thermo' : 'heat',
    'Tetra' : 'four',
    'Meter' : 'measure',
    'Scope' : 'look',
    'Son' : 'sound',
    'Dec' : 'ten',
    'Stell' : 'star',
    'Amat' : 'love'
} 

game.m_setup(wordList, specialAnswers);