 function equalVar(arr, num){
     const sum = [];
      for (let i = 0; i < arr.length; i++) {
        let element = arr[i]; 
          for (let j = i; j < arr.length; j++) {
          let element1 = arr[j];
            element + element1 ===num? sum.push([element, element1]):'false'    
          } 
      }
  return sum; 
 } 