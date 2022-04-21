
let ass = 2670;

// function solution(number){
//     let objN = {
//       I: 1,
//       II: 2,
//       III: 3,
//       IV: 4,
//       V: 5,
//       VI: 6,
//       VII: 7,
//       VIII: 8,
//       IX: 9,
//       X: 10,
//       XX: 20,
//       XXX: 30,
//       XXXX: 40,
//       L: 50,
//       C: 100,
//       D: 500,
//       M: 1000,
//     };
        
//       let answer = []; 
//       while (number != 0){
//           if(number >= 1000){
//              number -= 1000;
//           answer.push('M');
//           } else if(number >=500){
//             number -= 500;
//             answer.push('D');
//           } else if (number >= 100){
//             number -= 100;
//             answer.push('C');
//           } else if(number >= 50){
//             number -= 50;
//             answer.push('L');
//           } else if(number >= 10){
//             number -= 10;
//             answer.push('X');
//           } else if(number = 9){
//             number -= 9;
//             answer.push('IX')
//           } else if(number = 8){
//             number -= 8;
//             answer.push('IIX');
//           }else if(number >= 5){
//             number -= 5;
//             answer.push('V');
//           } else if(number = 4){
//             number -= 4;
//             answer.push('IV');
//           } else if(number >= 1){
//             number -= 1;
//             answer.push('I');
//           }
//       };
//       return answer = answer.join('')
//   }

function solution(number){
    let objN = {
      I: 1,
      II: 2,
      III: 3,
      IV: 4,
      V: 5,
      VI: 6,
      VII: 7,
      VIII: 8,
      IX: 9,
      X: 10,
      XX: 20,
      XXX: 30,
      XXXX: 40,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
        
      let answer = []; 
      while (number != 0){
          if(number >= 1000){
             number -= 1000;
          answer.push('M');
          } else if(number >=500 && number <1000){
            number -= 500;
            answer.push('D');
          } else if (number >= 100 && number <500){
            number -= 100;
            answer.push('C');
          } else if(number >= 50 && number <100){
            number -= 50;
            answer.push('L');
          } else if(number >= 10 && number <50){
            number -= 10;
            answer.push('X');
          } else if(number = 9 && number <10){
            number -= 9;
            answer.push('IX')
          } else if(number = 8 && number <9){
            number -= 8;
            answer.push('IIX');
          }else if(number >= 5 && number <8){
            number -= 5;
            answer.push('V');
          } else if(number = 4 && number <5){
            number -= 4;
            answer.push('IV');
          } else {
            number -= 1;
            answer.push('I');
          }
      };
      return answer = answer.join('')
  }




  let result = solution(ass);
  console.log(`result`, result)