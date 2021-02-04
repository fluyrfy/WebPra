const counter = function () {
    let num = 0;
  
    return function () {
      num++;
      console.log(num);
    };
  };
  
  const newCounter = counter();
  newCounter();
  newCounter();
  newCounter();