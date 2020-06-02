const sentence = "Hello there from me to you";
let timeIncr = 0;
let counter = 0;
for (const char of sentence) {
  if (counter === sentence.length - 1) {
    setTimeout(() => {
      process.stdout.write(char + '\n');
    }, timeIncr += 50) // <= 1s delay to make it noticeable. Can dial it down later.
  } else {
    setTimeout(() => {
      process.stdout.write(char);
    }, timeIncr += 50) // <= 1s delay to make it noticeable. Can dial it down later.

    counter += 1;
  }

}