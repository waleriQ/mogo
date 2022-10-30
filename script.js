// (function () {
//      const burger = document.querySelector('.burger');
// burger.addEventListener('click', () => {
//      burger.classList.toggle('burger_active');
// }) }() )
//
//

let people = [
    {name: 'Alex', age: 20, budget: 500},
    {name: 'Luiza', age: 17, budget: 500},
    {name: 'Kany', age: 18, budget: 500},
    {name: 'Many', age: 32, budget: 500},
]

// const relust = people.filter(person => person.age >= 18);
// console.log(relust)

// const amount =people.reduce( (total, person) => total + person.budget, 0);
// console.log(amount);
const SearchName = people.find(person => person.name === 'Many');
console.log(SearchName);