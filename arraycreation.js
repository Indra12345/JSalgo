const input = `first_name,last_name,header_1,header_2,header_3
Elvis,Presley,val1,val2,val3
Elizabeth,Queen,val1,val2,val3
Sona,Mathewson,val1,val2,val3
Raj,Kapoor,val1, val2,val3`; 


// write a function that will output as below that takes the an input as above
const array = [
  {
    first_name: "Elvis",
    last_name: "Presley",
    header_1: "val1",
    header_2: "val2",
    header_3: "val3",
  },
  {
    first_name: "El",
    last_name: "Queen",
    header_1: "val1",
    header_2: "val2",
    header_3: "val3",
  },
  {
    first_name: "Raj",
    last_name: "Kapoor",
    header_1: "val1",
    header_2: "val2",
    header_3: "val3",
  },
];

function parse(input) {
  // create an array that will  be poplulated with the those objects and this will be the returned object Array
  let userArray = [];

  //let log = console.log;

  let header_array = input.split("\n")[0];
  keys = header_array.split(",");
  //log(header_array);
  let value_array = input.split("\n").slice(1);
  //log(value_array)

  for (let i = 0; i < value_array.length; i++) {
    let values = value_array[i].split(","); // array of values for each entity

    let userObject = {};

    for (let i = 0; i < values.length - 1; i++) {
      userObject[keys[i]] = values[i];
    }
    //log(userObject)

    userArray.push(userObject);
  }

  return userArray;
}

console.log(parse(input));