export const validateInput = (input: number): void => {
  if (![0, 1, 2].includes(input)) {
    console.log('Invalid option. Game over.\n');
    process.exit(1);
  }
}
