process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const idst = process.stdin.read();
  if (idst) {
    process.stdout.write(`Your name is: ${idst}`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
