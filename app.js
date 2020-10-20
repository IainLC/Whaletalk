const input = 'aeiou';
const vowels = ['a','e', 'i', 'o', 'u'];
let resultsArray = [];

for (let i = 0; i < input.length; i++){
 // console.log(input[i]);
  for (let j = 0; j < vowels.length; j++){
 // console.log(vowels[j]);
if(input[i] === vowels[j]){
if(input[i] === 'e'){
    resultsArray.push('ee');
  }else if (input[i] === 'u'){
    resultsArray.push('uu');
  } else {resultsArray.push(input[i]);
  }
}
}
}

console.log(resultsArray.join('').toUpperCase());


for (let inputIndex = 0; inputIndex < input.length; inputIndex++){
  for (let vowel = 0; vowel < vowels.length; vowel++){
 
    if (input[inputIndex] === vowels[vowel]){
      if ( input[inputIndex]=== 'e'){
        resultsArray.push('ee');
      }
      else if (input[inputIndex] === 'u'){
        resultsArray.push('uu');
      }
      else {resultsArray.push(input[inputIndex]);
      
      }
    }
  }
}

console.log(resultsArray.join('').toUpperCase());

for (let inputIndex = 0; inputIndex < input.length; inputIndex++){
  for (let vowel = 0; vowel < vowels.length; vowel++){
 
    if (input[inputIndex] === vowels[vowel]){
      if ( input[inputIndex]=== 'e'){
        resultsArray.push('ee');
      }
      else if (input[inputIndex] === 'u'){
        resultsArray.push('uu');
      }
      else {resultsArray.push(input[inputIndex]);
      
      }
    }
  }
}

console.log(resultsArray.join('').toUpperCase());