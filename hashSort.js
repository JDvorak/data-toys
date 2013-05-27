//Linear time sorting algorithm

var arrayHashSort = function(list, range) {
  var matrixWidth = Math.ceil(Math.sqrt(range)),
      value = 0,
      count = list.length,
      hashArray = [],
      results = [];

  for (x = 0; x < count; x++) {
    value = list[x];
    place = (value % matrixWidth) + (matrixWidth *  ~~(value / matrixWidth));

    if (hashArray[place] === value){
      hashArray[place][1]++;
    } else {
      if (!hashArray[place]) hashArray[place] = [0, 0];
        
      hashArray[place][0] = value;
      hashArray[place][1]++;
    }
  }

  for (var i = 0, len = hashArray.length; i < len; i++) {
    if (!hashArray[i]) continue;
    for (var j = 0; j < hashArray[i][1]; j++) {
      results.push(hashArray[i][0]);
    }
  }

  return results;
}

 var matrixHashSort = function(sequence, range) {
    var value = 0,
        count = sequence.length, 
        sortedSequence = [],
        hashMatrix = [];

    var matrixWidth = Math.ceil(Math.sqrt(range))
    for (var i = 0; i < matrixWidth; i++) {
      hashMatrix[i] = [];
    };

    for (x = 0; x < count; x++) {
      value = sequence[x];
      row = (value % matrixWidth);
      col = ~~(value / matrixWidth);
      if (!hashMatrix[col][row] && hashMatrix[col][row] === value) {
        hashMatrix[col][row].push(value);
      } else {
        if (!hashMatrix[col][row]) {
          hashMatrix[col][row] = [];
        }
          hashMatrix[col][row].push(value);
      }
    }

    for (var i = 0; i < matrixWidth; i++) {
      if (!hashMatrix[i]) continue;
      for (var j = 0; j < matrixWidth; j++) {
        if (!hashMatrix[i][j]) continue;
        for (var m = 0, len = hashMatrix[i][j].length; m < len; m++)
        sortedSequence.push(hashMatrix[i][j][m]);
      }
    }
    return sortedSequence;
  }
