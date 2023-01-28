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


function addSpace(res, index, width){
  if(typeof res == "string"){
    res = res.split('')
  }

  console.log(`res.length`, res.length,  `width -`, width);

  for(let y = 0; y < res.length; y++){
    console.log(res[y]);
    if(res.length < width){
      console.log(`res[y] == index?`, res[y] == index, `index- `, index, index.length)
      console.log(`hello1`);
      if(res[y] == index){
        console.log(`hello2`)
        res[y] = res[y] + index;
        console.log(`res{y} + index`, res[y]);
      }
    }

      if(res.join('').length == width){
        
        res.push('\n');
        console.log(`res`, res)
        // result.push(res);
        // console.log(`result`, result)
        // console.log(`result.length`, result.length);
        break
    }
  }

  if(res.join('').length < width){
    index = index.toString() + ' ';
    addSpace(res, index, width)
  }

  res = res.join('')
  console.log(`res2`, res)
  // console.log(`result2`, result)
  console.log(`index at end of function -`,index)
  return res
}

// let spaceChecker = addSpace('123 45', ' ', 7);
// console.log(`spaceCheker`, spaceChecker)
// ///////////////////////////////////////////////////////////////////////////////






function justify(text, width) {
  console.log(`width -`, width)
  
  let result = [];

  if(text.length <= 1){
    result = text.toString()
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
      text.splice(0, i+1)
      break
    }
  }

  res = res.join(' '); 
  console.log(`res after cut -`, res);
  console.log(`text after cut -`, text)

  console.log(`res.length -`, res.length, `res.length == width? -`, res.length == width, `width -`, width)

  // if(res.length == width) {
  //   console.log(`res 142`, res)
  //   result.push(res);
  //  } 

   if(res.length < width){

      let index;
      index = ' ';
      console.log(`res -`, res)
      console.log(`hello -`)
      console.log(`res.length -`, res.length, `width - `, width)
      res = addSpace(res, index, width)
      console.log(`addSpace(res, width, index, result) -`, addSpace(res, index, width))
      console.log(`res after add - `, res)
  }
  
  result.push(res);
  console.log(`result4-`, result);
  console.log(`res -`, res);

  console.log(`text.length < width -`, text.length < width);
  if(text.length < width){
    result.push(justify(text.toString(), width));
  } // ???????????????????????????????????????dasdfafasfasf aosfh au WATCH HERE MOTHERFUCKE ???????????????????????????????????????????????????
  //-----------------------------------------------------------------------------------------------------------------------------
  
  console.log(`result3`, result);
  result = result.join('');
  console.log(`result -`, result);

  return result 
}

let check = '123 45 6';
let width = 7;
let answer = justify(check, width);

console.log(`answer -`, answer);

let lorem = 'tttt tt ttterterte etrter terert ertert terterer ertertertert ert erterterte ertertert ertertert ertertert';

console.log(justify(lorem, 10))