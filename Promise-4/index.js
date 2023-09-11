function favFood(food){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      if (food == 'apple'){
        resolve('Yummy')
      }
      reject('Yucky')
    }, 2000)
  })
} 




// **Challenge 1** Resolve your promise with the name of your favorite food. 
// Do this by calling the `resolve` with an argument. 
favFood('apple').then(msg => {
  console.log(msg)
}).catch(err=>{
  console.log(err)
})
// **Challenge 2** Resolve the promise `food` with the `.then()` syntax 
// and print your favorite food to the console. 
