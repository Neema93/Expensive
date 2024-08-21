const add = (a,b) => a + b;
const generateGreeting = (name) => `Hello ${name}`;

test('should add two numbers', () => {
    const result = add(3,4);
   expect(result).toBe(7);
})
test('should generate greeting from name', () => {
    const name = generateGreeting('Neema');
   expect(name).toBe(`Hello Neema`);
})
test('should generate greeting for no name', () => {
    const name = generateGreeting('');
   expect(name).toBe(`Hello `);
})