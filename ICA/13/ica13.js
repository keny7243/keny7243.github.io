const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");

// || Callback Hell ||
/* function doStep1(init, callback) {
    alice1.animate(aliceTumbling, aliceTiming);
    const result = init + 1;
    callback(result);
  }
  
  function doStep2(init, callback) {
    alice2.animate(aliceTumbling, aliceTiming);
    const result = init + 2;
    callback(result);
  }
  
  function doStep3(init, callback) {
    alice3.animate(aliceTumbling, aliceTiming);
    const result = init + 3;
    callback(result);
  }
  
  function doOperation() {
    doStep1(0, (result1) => {
      doStep2(result1, (result2) => {
        doStep3(result2, (result3) => {
          console.log(`result: ${result3}`);
        });
      });
    });
  }
  doOperation(); */

// || Promise Chaining || 
alice1.animate(aliceTumbling, aliceTiming).finished
  .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
  .then(() => alice3.animate(aliceTumbling, aliceTiming));


// || Async and Await ||
/*async function doAsyncAnimation() {
    try {
        await alice1.animate(aliceTumbling, aliceTiming);
        if(alice1.animate(aliceTumbling, aliceTiming).finished) {
            console.log('yea');
            const secondAnimation = await alice2.animate(aliceTumbling, aliceTiming);
            if(secondAnimation.finished) {
                const thirdAnimation = await alice3.animate(aliceTumbling, aliceTiming);
            }
        }
    }
    catch (error) {
        console.error('Animation not working');
    }
}
const promise = doAsyncAnimation();
promise.then(() => console.log('done'));*/