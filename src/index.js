const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----': '0',
    '**********': ' ',
};

const decode = (expr)=> {
    const array = expr.match(/.{1,10}/g);
    let arr = []
    array.forEach(element => {
        arr.push(element.replace(/10/gi,'.').replace(/11/gi,'-').replace(/0/gi,''))
    });
    let ar = []
        for (let i = 0; i < arr.length; i++) {
            for (let key in MORSE_TABLE) {
        if (arr[i]==key) {
            ar.push(MORSE_TABLE[key])
        }
    }
}
    return ar.join('')
}

console.log(decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"));



module.exports = {
    decode
}