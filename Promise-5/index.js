function whatToEat(timeOfDay) {
  // Create a new promise and return it here
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      if (timeOfDay == 'breakfast'){
        resolve('Eggses')
      }
      else if (timeOfDay == 'lunch'){
        resolve('apple and pbj')
      }
      else if (timeOfDay == 'dinner'){
        resolve('salmon and rice')
      }
      reject("I would never eat a snack, surely")
    }, 5000)
  })
 }
  


// whatToEat should return a promise. 
// If the `timeOfDay` is 'breakfast', 'lunch', or 'dinner' 
// resolve the promise with your favorite food for that time. 
// If the `timeOfDay` is anything else reject the promise with 
// the the message: "I don't eat between meal snacks!"

// Handle the Promise returned from whatToEat here: 

whatToEat('lunch').then(msg=>{
  console.log(msg)
}).catch(err=>{
  console.log(err)
})

// Handle this Promise: 
whatToEat('elevensies').then(msg=>{
  console.log(msg)
}).catch(err=>{
  console.log(err)
})
