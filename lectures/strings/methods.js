console.log('javascript: string methods');

let str_1 = `I love Javascript.`;
let str_2 = `Javascript is powerful.`;

// concat : merged one or more strings
let mergedStr = str_1.concat(str_2);
console.log('merged string => ', mergedStr);

// replace : replace word, letter or sentence
let word = "Priya is good girl. Priya having JS notes"
let replaceJS = word.replace("Priya", "Avni");
console.log('replace string => ', replaceJS);

// replaceAll : replace words from the sentence
let replaceAll = word.replaceAll('Priya', 'Riya');
console.log('replace Priya to Riya => ', replaceAll);

// slice() : cut the portion of the sentence or word
let myWorld = 'Priyanka';
let sliceMyWorld = myWorld.slice(1,5);
console.log('slice my world => ', sliceMyWorld, sliceMyWorld.toUpperCase());

// includes();
let hasNotes = word.includes('notes');
console.log('is notes are there? ', hasNotes);

// startsWith(); if given sentence or word starts with it will be true;
let startWithJ = myWorld.startsWith('java');
console.log('is start with J? ', startWithJ);

// endsWith();
let endsWithT = myWorld.endsWith('ipt');
console.log('ends with ipt? ', endsWithT);

let myStr = "apple, mango, bannana, grapes";
let str2arr = myStr.split(",");
console.log('string to array => ', str2arr);

