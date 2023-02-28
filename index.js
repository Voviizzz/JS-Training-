
// let arr = [20, 33, "Человек" ,1, 2, 3];
// let barr = arr;
// for (var i = arr.length - 1; i >= 0; i--) {
//   if (typeof arr[i] !== "number")
//     arr.splice(i, 1);
// }
// barr.sort(sortAr);
// console.log(JSON.stringify(barr));
// function sortAr(a,b){
//     return a-b
// }

function filter_list(l) {
    let arr = l;
    for(var i = arr.length - 1; i>=0; i--){
        if (typeof arr[i] !== "number")
        arr.splice(i,1)
    }
    arr.sort(sortArr);
    function sortArr(a,b){
        return a-b
    }
    return l;
  }
  alert(filter_list ([1,"a","b",0,15]))
