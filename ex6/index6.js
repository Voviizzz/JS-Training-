// function countSheeps(arrayOfSheep) {
//     let SumSheep = 0;
//     for (i = 0; i< arrayOfSheep.length; i++){
//         if( arrayOfSheep[i] === true){
//             SumSheep+=1;
//         }
//     }
//     return SumSheep
//   }
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }
console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ])
);
