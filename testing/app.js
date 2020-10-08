


function calculateHanoi(disksNumber, turnsSpeed) {

  let result = {};

  result.turns = 2**disksNumber -1;
  result.seconds = Math.floor(result.turns*3600/(turnsSpeed));



  console.log(result)
};

calculateHanoi(5, 4074);
calculateHanoi(7, 4090)