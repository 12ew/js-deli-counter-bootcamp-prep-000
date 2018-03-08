var katzDeli = [];

// function takeANumber(katzDeli, newPerson) {
//   var position = katzDeli.length + 1;
//   katzDeli.push(newPerson);
//   return "Welcome, " + newPerson +". You are number "+ position +" in line.";
// }

//when a new person comes into katzDeli they get assigned a number instead of a position (i.e., the first person who comes in is 501, the next 502, then 503 and so forth). As more people come in, that number increases until the last person of the day comes in. Unlike a position, which can decrease as people leave, the assigned number is universal for the day and only continues to increase as more people come in. 

function takeANumber(katzDeli, newPerson) {
  
  var counter = 0;
  while (counter => 0) {
   counter++;
}
  
  
  return "Welcome, " + newPerson +". You are number "+ counter + ".";
}


function nowServing (katzDeli) {
var newPerson;

if (katzDeli.length === 0) {
  return "There is nobody waiting to be served!";
}

newPerson = katzDeli.shift();
  return "Currently serving "+ newPerson + ".";
}


function currentLine (katzDeli) {
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  }

  var myString = `The line is currently: 1. ${katzDeli[0]}`;

  for (let i = 1; i < katzDeli.length; i++) {
  myString += `, ${i+1}. ${katzDeli[i]}`;
}
return myString;
}

