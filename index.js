function map(sourceArray, callback) {
  // init array
  const x = [];

  // perform operation on every element in sourceArray then push value to init'd array
  sourceArray.forEach(i => x.push(callback(i)));

  // return new array
  return x;
}

function reduce(sourceArray, callback, initValue) {
  // init value to return
  let result;

  // if initValue is defined
  if (initValue) {
    // set result to initValue
    result = initValue;

    // set result to the value of performed operation on every element in sourceArray
    for (let i = 0; i < sourceArray.length; i++) {
      result = callback(sourceArray[i], result);
    }

    // return result
    return result
  } else {
    // set result to first element in sourceArray
    result = sourceArray[0];

    // set result to the value of performed operation on every element in sourceArray
    for (let i = 1; i < sourceArray.length; i++) {
      result = callback(sourceArray[i], result);
    }

    // return result
    return result
  }
}
