process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const idt = process.stdin.read();
  if (idt) {
    process.stdout.write(`Your name is: ${idt}`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
