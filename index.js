//we need let customers take a number when they enter our store! Woo! So let's build a great function for them below!

// var katzDeliLine = []; 

function takeANumber (katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);
  var currentLineNumber = katzDeliLine.length;
  
  return (`'Welcome, ${newPerson}. You are number ${currentLineNumber} in line.'`);
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) {
    return ('Currently serving '+ katzDeliLine.shift() + '.')
  }
  else {
    console.log('There is nobody waiting to be served!')
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i++;) {
      console.log(`The line is currently: ${[i]}. ${katzDeliLine[i]}`)
    }}
  else {
    console.log('The line is currently empty')
  }
}