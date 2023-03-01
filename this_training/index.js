function products (fructs, vegetables){
    this.fructs = fructs;
    this.vegetables = vegetables;
}
var ourProducts = new products('apple','cucumber');
console.log(ourProducts)

function add(c, d){
    console.log(this.a + this.b + c + d)
}
var ten = {a: 1, b: 2}
add.call(ten, 3, 4) 
add.apply(ten, [3,4])

// Когда мы используем add.call(), то первый параметр это то, чем будет this.
// Последующие параметры передаются функции, которую мы вызываем. 
//Следовательно, в add(), this.a соответствует ten.a и this.b соответствует ten.b и мы получаем на выходе 1+2+3+4 или 10.
// add.apply() довольно схож. Первый параметр это то, чем будет this. 
//Последующий параметр это массив аргументов используемый в функции.