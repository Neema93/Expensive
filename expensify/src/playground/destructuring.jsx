const person ={
    name: 'Neema',
    age:30,
    location:{
        city: 'Oshawa',
        temp:52
    }
};
const {name, age} = person
const {city, temp} = person.location
console.log(`${name} is ${age}`);
if(city && temp){
console.log(`It's ${temp} in ${city}`)
}
