export default (expenses = [], { text = '', sortBy = 'date' } = {}) => {
    return expenses
        .filter((expense) => {
            const textMatch = expense.description && expense.description.toLowerCase().includes(text.toLowerCase());
            return textMatch;
        })
        .sort((a, b) => {
            if (sortBy === 'date') {
                return new Date(b.createdat) - new Date(a.createdat); // Ensure descending order for dates
            } else if (sortBy === 'amount') {
                return b.amount - a.amount; // Ensure descending order for amounts
            }
            return 0; // No sorting if sortBy doesn't match
        });
};