process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const procs = process.stdin.read();
  if (procs !== null) {
    process.stdout.write(`Your name is: ${procs}`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

