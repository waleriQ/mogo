// (function () {
//      const burger = document.querySelector('.burger');
// burger.addEventListener('click', () => {
//      burger.classList.toggle('burger_active');
// }) }() )
//
//

let person = {
     name: 'Valter',
     FullAge: {
          age: 26,
          YearBorn: 1994,
     },
     Gender: 'female'
}

let PersonClone = Object.assign({}, person);

