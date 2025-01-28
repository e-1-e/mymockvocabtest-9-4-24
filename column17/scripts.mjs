/* Place your JavaScript in this file */
var wordList = {
    'Atmo' : 'vapor',
    'Cardio' : 'heart',
    'Cosmo' : ['world', 'universe', 'world or universe'],
    'Counter' : 'against',
    'Cranio' : 'skull',
    'Cyclo' : 'circle',
    'Gno' : 'know',
    'Oss' : 'bone',
    'Xylo' : 'wood',
    'Monger' : 'seller',
    'Sept' : 'seven',
    'Xeno' : 'stranger',
    'Vas' : 'vessel',
    'Fore' : 'front',
    'Ish': 'like',
    'Less': 'without',
    'Baro' : 'pressure',
    'Ferro' : 'iron',
    'Quasi' : 'somewhat',
    'Nesia' : 'island',
    'Lepsy' : 'attack',
    'Let' : 'little',
    'Nano' : 'billionth',
    'Pico' : "trillionth",
    'Ideo' : 'idea'
} 

var game = await import('../maingame.mjs');
/* Place your JavaScript in this file */
game.m_setup(wordList);