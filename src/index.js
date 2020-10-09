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
    '-----':  '0',
};

function decode(expr) {
	//  swap key value in object	
	var newObj = Object.keys(MORSE_TABLE).reduce((accumulator, key) => {
		if (MORSE_TABLE.hasOwnProperty(key)) {
			accumulator[MORSE_TABLE[key]] = key;
		}
		return accumulator;
	}, {});

	//  decode value in object
	for(let key in newObj){
		newObj[key] = newObj[key].replace(/-/gi,'11');
		newObj[key] = newObj[key].replace(/\./gi,'10');
		newObj[key] = newObj[key].split('');
		
		if(newObj[key].length<10){
			newObj[key] = newObj[key].reverse();
		while(newObj[key].length<10){
		 newObj[key].push('0');
		}
		newObj[key] = newObj[key].reverse().join('');
	  }else{
	  	newObj[key] = newObj[key].join('');
	  }
		
	  }

	  newObj[' '] = '**********';

	  //  get a result

	let arr = expr.split('');
	let resultStr = ''
	let temp1='';
	let temp2='';

	for(let i=0; i<arr.length;i+=10){
		for(let key in newObj){
			temp1 = newObj[key];
			temp2 = arr.slice(i,i+10).join('');
		  if(newObj[key]===arr.slice(i,i+10).join('')){
		  	resultStr += key;
			break;
		  } 
		}
	  }

  return resultStr;
}

module.exports = {
    decode
}