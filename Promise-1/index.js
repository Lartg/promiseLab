// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    const one = 1
    if (one == 2) {
      resolve('>>> Success! <<<');
    }
    reject("--- Oops ---");  
    reject("teehee") 
  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected! 😞');
  console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`
// After not resolving the alloted time, the error message defined in reject is logged
// **2)** What happens when you call both `resolve` and `reject`? Test this.
// the first one called executes
// **3)** Does the order matter you call resolve and reject matter? Test this. 
//yes
// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
// the first reject is called