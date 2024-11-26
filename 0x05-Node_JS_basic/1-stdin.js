process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const proc = process.stdin.read();
  if (proc !== null) {
    process.stdout.write(`Your name is: ${proc}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
