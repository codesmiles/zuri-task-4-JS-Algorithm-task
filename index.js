// 1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.

function convertFahrToCelsius(parameter){
	let f = parameter;

	if(typeof f === 'number'){
	f = (f - 32) * 5/9;
	return f.toFixed(4)
}
else if(Array.isArray(f)){
		return `${JSON.stringify(f)} is not a valid number but a/an Array`
}
else{
	return `${JSON.stringify(f)} is not a number but an ${typeof f}`
}


}
console.log(convertFahrToCelsius({ade:2}))


// 2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces factors of 2, 3, and 5 with "yu", "gi" and "oh", logs the resulting array to the console then returns the resulting array.

const checkYuGiOh = (n) => {
    if (typeof n !== "number") return `invalid parameter: ${n}`;
    const numArr = [...Array(n).keys()].map(number => number + 1);
    const replacedArr = numArr.map(number => {
        let result = "";
        if (number % 2 === 0) {
            result = "yu";
        } 
        if (number % 3 === 0) {
            result = (result.length >= 2) ? `${result}-gi` : "gi";
        }
        if (number % 5 === 0) {
            result = (result.length >= 2) ? `${result}-oh` : "oh";
        }
        return (result.length < 2) ? number : result;
    });
    return replacedArr;
} 

console.log(checkYuGiOh(50))