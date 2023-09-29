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
      // console.log('Too young to register')
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

  login(username, password) {
    if(!this.registeredUsers[username] || this.registeredUsers[username].password !== password){
      console.log('Username or password is incorrect')
      throw new Error('Username or password is incorrect')
    }else{
      this.registeredUsers[username].loggedIn = true
      console.log('User has been logged in')
      console.log(this.registeredUsers[username])
    }
  }
}

let theSA = new ScooterApp()

/////////// demo area

let personOne = theSA.registerUser('Person One', '123Wurd', 18)
// // let personTwo = theSA.registerUser('Person Two', '123wurd', 76)

// theSA.login('Person One', '123Word')
theSA.login('Person One', '123Wurd')

// console.log(response, 'here')

module.exports = ScooterApp
