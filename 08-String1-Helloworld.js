function lastWord(s) {
    let words = s.split(" "); //splits the string into words
    let lastWord = words[words.length - 1]; //gets the last word.
    let length = lastWord.length; //finds the length of the last word.

    return length;
}

console.log(lastWord("Hello World"))
