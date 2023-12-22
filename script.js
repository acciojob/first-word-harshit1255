function firstWord(s) {
  // your code here
	let arr = s.split(' ');
	let val =arr[0].length ===0?arr[1]:arr[0];
	return val;
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
