// function loop(start, test, update, body) {
//   for (let value = start; test(value); value = update(value)) {
//     body(value);
//   }
// }


// function every(array, test) {
//   for(let i = 0; i < array.length; i++){
//     if (!test(array[i])){
//        return false  
//      }
//    } 
//    return true
// }


// ---------------------------------------------------------------------------------------

// function solution(list){
//   let start = 0; 
//   let range = []
//   let end = 0;
//   let result = [];
//   for(let i = 0; i < list.length; i++){
//     if(list[i] + 2 == list[i+2]){
//       end = i+2;
//       console.log(end)
//     } else {
//       range = list.splice(start, end+1);
//       break
//     }
//   }
//   console.log(`range`, range);
//   if(range.length >= 3){
//     result.push(`${range[0]}-${range[range.length - 1]}`);
//   } else {
//     result.push(...range);
//   }


//   console.log(`result`, result);
//   console.log(`list`, list);
//   if(list.length > 0){
//    result = result + ',' + solution(list) ;
//   }
//   return result
// }
// let list = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];
// let answer = solution(list)
// console.log(`answer`, answer)

// --------------------------------------------------------------------------------------------------------


function addSpace(res, index, width, result){
  res = res.split('');

  console.log(`res.length`, res.length, width, `width`);

  for(let y = 0; y < res.length; y++){
    console.log(res[y]);
    if(res.length < width){
      console.log(`hello1`);
      console.log(`index`, index);
      console.log(`res[y] == index?`, res[y] == index)
      if(res[y] == index){
        console.log(`hello2`)
        res[y] = res[y] + index;
        console.log(`res{y} + ineex`, res[y]);
      }
    }

      if(res.join('').length == width){
        
        res.push('/n');
        result.push(res);

        console.log(`result.length`, result.length);
        break
    }
  }



  index = index + ' '
  console.log(`index at end of function`, index)
  return  res, index,  result //????????????????????????????????????????????????????????????????/
}

let spaceChecker = addSpace('123 45', ' ', 7, []).join('');
console.log(`spaceCheker`, spaceChecker)
///////////////////////////////////////////////////////////////////////////////

function justify(text, width) {
  console.log(`width`, width)
  
  let result = [];

  if(text.length <= 1){
    result = text
    return result;
  }

  if(text.length > 1){
  text = text.split(' ');
  }


  console.log(`text`, text)
  let res = []
  for(let i = 0; i < text.length; i++){
    res.push(text[i]);
    if(res.join(' ').length > width){
      text.splice(0, i);
      res.pop();
      break
    } else if(res.join(' ').length == width){
      text.splice(0, i)
      break
    }
  }

  res = res.join(' '); 
  console.log(`res after cut`, res);
  console.log(`text after cut`, text)

  console.log(`res.length`, res.length, `res.length == width?`, res.length == width)

     console.log(`res.length`, res.length, `width`, width)

  if(res.length == width) {
    res = res + '/n';
    result.push(res);
   } 
   else if(res.length < width){

      let index = ' ';
      console.log(`res`, res)
      console.log(`hello`)
      console.log(`res.length`, res.length, `width`, width)
      addSpace(res, width, index, result)
      console.log(`addSpace(res, width, index, result)`, addSpace(res, width, index, result))
  }
  

  
  console.log(`res`, res)

  
  if(text < width){
    result.push(justify(text, width));
  }
  
  result = result.join('')
  console.log(`result`, result)

  return result 
}

let check = '123 45 6';
let width = 7;
let answer = justify(check, width);

console.log(`answer`, answer)