// let user = {}
// user.name = 'Vladimr'
// user = {
//     sayHi(){
//         alert('HI!')
//     }
// }
// console.log(user.sayHi())
// Ключевое слово «this» в методах

// Как правило, методу объекта обычно требуется доступ к информации, 
// хранящейся в объекте, для выполнения своей работы.
// Например, коду внутри user.sayHi() 
// может потребоваться имя пользователя, которое хранится в объекте user.
// let calculator = {
//  mul(){
//     return this.a * this.b
//  },
//  sum(){
//     return this.a + this.b
//  },
//  read() {
//     this.a = +prompt('a?', 0),
//     this.b = +prompt('b?', 0);
//  }
// };

// calculator.read();
// alert(ca)
// alert(calculator.mul())

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this
    },
    down() {
      this.step--;
      return this
    },
    showStep: function() { // показывает текущую ступеньку
    
    alert(this.step );
    return this;
    }
  };
  ladder.up().up().down().showStep().down().showStep();

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 