// let keypath = 'address.state.city'

// const word = keypath.split('.').join('.')
// console.log(word) // address.state.city

function getNestedValue(obj, keyPath) {
    // Return the value from the nested object based on keyPath
    // If the keyPath is invalid, return undefined
    // Example: getNestedValue({user: {name: 'John'}}, 'user.name') => 'John'   
    // Example: getNestedValue({user: {name: 'John'}}, 'user.address.city') => undefined
    // Example: getNestedValue({user: {name: 'John', address: {city: 'New York'}}}, 'user.address.city') => 'New York'
    const keys = keyPath.split('.')
    console.log(keys)
    let value = obj 
    for (let key of keys) {
        if (value[key]) {
            value = value[key]
        } else {
            return undefined
        }
    }
    return value
  }

   const obj = {
    user:{
        name: 'John',
        address:{
            state:{
            city: 'New York'
            }
        }
    }
   }

   const keyPath = 'user.address.state.bro'
   console.log(getNestedValue(obj, keyPath)) // New York