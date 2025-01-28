/* Place your JavaScript in this file */
var wordList = {
    'Ped' : 'foot',
    'Mort' : 'death',
    'Carn' : 'flesh',
    'Psych' : 'soul',
    'Ethno' : 'race',
    'Gen' : 'origin',
    'Nat' : 'born',
    'Paleo' : 'old',
    'Curs' : 'run',
    'Crypt' : 'hidden',
    'Cad' : 'fall',
    'Capit' : 'head',
    'Loqu' : 'talk',
    'Sacro' : "holy",
    'Uni' : 'one',
    'Ness' : 'quality',
    'Alt' : 'high',
    'Ics' : 'art',
    'Iso' : 'equal',
    'Vert' : 'turn',
    'Ate' : 'cause',
    'Cor' : 'heart',
    'Ess' : "female",
    'Muta' : "change",
    'Fug' : 'flee'
} 

var game = await import('../maingame.mjs');
/* Place your JavaScript in this file */
game.m_setup(wordList);