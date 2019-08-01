
let counter = 0;
let winning;
let userAnswer;

  const readFromTheConsole = require('readline');
  const readLine = readFromTheConsole.createInterface({input : process.stdin,
                                                      output : process.stdout});



  readLine.question('What is 22 + 5 ? \n', (userInput)=> {
    userAnswer = (userInput.trim()).toLowerCase();

    if (userAnswer.length > 2){
      console.log('too long, a two digits number is expected');
      keepPlaying();
    } else {
      if (userAnswer == 27) {
        winning = true;
        readLine.close()
      } else {
          counter++;
          keepPlaying();
      }
    }
  })

readLine.on('close', ()=> {
  if (winning) {
    console.log('right answer'); 
  } else {
    console.log('game over'); 
  } 
})



function keepPlaying() {
    console.log('Tries left :', 5 - counter);
    readLine.setPrompt('try again\n');
    readLine.prompt();
    readLine.on('line', (userInput)=> {
      if (userAnswer == 27) {
        winning = true;
        readLine.close();
      } else {
        counter++
        console.log('Tries left :', 5 - counter);
        if (counter < 5){
          readLine.setPrompt('Not the right answer, try again\n');
          readLine.prompt();
        } else {
            winning = false
            readLine.close();
        }
      }
    })
  }