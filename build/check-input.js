export const validateInput = (input) => {
    if (![0, 1, 2].includes(input)) {
        console.log('Invalid option. Game over.\n');
        process.exit(1);
    }
};
