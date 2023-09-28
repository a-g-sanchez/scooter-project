const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(){
    this.stations = {
      atxNorth: [],
      atxEast: [],
      atxSouth: [],
      atxWest: []
    }
    this.registeredUsers = {}
  }

  registerUser(username, password, age){
    if(age<18){
      console.log('Too young to register')
      throw new Error('Too young to register')
    }
    
    if(!this.registeredUsers[username] && age >= 18){
    let newUser = new User(username, password, age)
    this.registeredUsers[newUser.username] = newUser
    console.log('user has been registered')
    return newUser
    } else if(this.registeredUsers[username] && age >=18){
      console.log('Already Registerd')
      throw new Error('Already Registered')
    }
  }
}

let theSA = new ScooterApp()

let personOne = theSA.registerUser('Person One', '123Wurd', 18)
let personTwo = theSA.registerUser('Person Two', '123wurd', 76)

console.log(theSA)

module.exports = ScooterApp
