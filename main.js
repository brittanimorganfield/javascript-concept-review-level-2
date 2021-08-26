// Problem 1
const exercise1 = (phrase) => {
    console.log('Problem 1');

    const modified = phrase.toLowerCase().split(' ');
    for (let i = 1; i < modified.length; i+=2) {

        modified[i] = modified[i].toUpperCase();
    }
    
    const result = modified.join(' ');
    console.log(result);
    return result;
  }
  
  // Problem 2
  const exercise2 = (word) => {
    console.log('Problem 2');

    if (word === word.toLowerCase()) {
      console.log(word.toUpperCase());
      return word.toUpperCase();
    }

    if (word === word.toUpperCase()) {
      console.log(word.toLowerCase());
      return word.toLowerCase();
    }

    console.log(`Try changing it up a little: ${word}`);
    return `Try changing it up a little: ${word}`
  }
  
  // Problem 3
  const first = (arr,num) => {
    console.log(arr.slice(0, num));
    return arr.slice(0, num);
  }
  // problem 3
  const last = (arr,num) => {
    console.log(arr.slice(-num));
    return arr.slice(-num);
  }
  
  const exercise3 = () => {
    console.log('Problem 3');
    first([2,3,9,7,4,5],3);
    last([2,3,9,7,4,5],4);
  }
  
  // Problem 4
  const exercise4 = (arr,unwanted) => {
    console.log('Problem 4');

    arr = arr.filter((item) => item !== unwanted);
    console.log(arr);
    return arr;
  }
  
  // Problem 5
  const exercise5 = () => {
    console.log('Problem 5');
    const pet_list = [];
  
    const pet1 = {
      type: 'Dog',
      age: 10,
      color: 'black'
    }
  
    const pet2 = {
      type: 'Hamster',
      age: 5,
      color: 'white'
    }
  
    const pet3 = {
      type: 'Lizard',
      age: 1,
      color: 'green'
    }
  
    pet_list.push(pet1, pet2, pet3);
  
    for (const pet of pet_list) {
      console.log(`Pet Type: ${pet.type}`)
      console.log(`Pet's Age: ${pet.age}`)
      console.log(`Pet's Color: ${pet.color}`)
      console.log("=============================");
    }
  }
  
  const main = () => {
    exercise1();
    exercise2();
    exercise3();
    exercise4([3,4,7,6,7,9,2],7);
    exercise5();
  }
  
  main();