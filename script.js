// (function () {
//      const burger = document.querySelector('.burger');
// burger.addEventListener('click', () => {
//      burger.classList.toggle('burger_active');
// }) }() )
//
//

const account = {
     name: 'Bill',
     age: 18,
     gender: 'Мужчина',
     accountShow() {
          return 'Имя: ' + this.name + ' Возраст: ' + this.age + ' Пол: ' + this.gender
     }
}
console.log(account);


