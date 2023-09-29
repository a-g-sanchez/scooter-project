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

  loginUser(username, password) {
    if(!this.registeredUsers[username]){
      // console.log('Username or password is incorrect')
      throw new Error('Username is incorrect') 
      // Instructions say to 'username or password is incorrect' but I belive the user login method should handle password validatioin. Changing this verbage is now more direct and easier to read
    }

    this.registeredUsers[username].login(password)
    }
  
  logoutUser(username){ 
    if(!this.registeredUsers[username]){
      throw new Error('No such user is logged in')
    }

    this.registeredUsers[username].logout()
  }

  createScooter(station) {
    if(!this.stations[station]){
      throw new Error('No such station error')
    }

    let newScooter = new Scooter(station)
    newScooter.station = station
    this.stations[station].push(newScooter)

    console.log('Created new scooter')
    return newScooter
  }

  rentScooter(scooter, user) {
    let availableScooters = []
    let rentedScooter 

    //Adds available scooters to availableScooters array
    for (const stations in this.stations) {
      for(let i = 0; i<this.stations[stations].length; i++){
        availableScooters.push(this.stations[stations][i].serial)
      }
    }

    //Checks if the desired scooter is available or not
    if(!availableScooters.includes(scooter)){
      throw new Error('Scooter is unavailable')
    }

    //Removes the desired scooter from the stations object 
    for (const stations in this.stations) {
      for(let i = 0; i<this.stations[stations].length; i++){
        if(scooter === this.stations[stations][i].serial){
          rentedScooter = this.stations[stations].splice(i, 1)
        }
      }
    }

    //Uses the rent method from the scooter instance to apply a user to the user property
    if(this.registeredUsers[user]){
      rentedScooter[0].rent(this.registeredUsers[user])
      console.log('Scooter is rented')
    }   
  }

  dockScooter(scooter, station){
    if(!this.stations[station]){
      throw new Error('No such station')
    }

    this.stations[station].push(scooter)
    scooter.dock()
    console.log('Scooter is docked')
  }
}


/////////// quick demo area ///////////
let theSA = new ScooterApp()
let testScooter = new Scooter('atxWest')
theSA.stations['atxWest'].push(testScooter)

//////Register User
let personOne = theSA.registerUser('Person One', '123Wurd', 18)
// // let personTwo = theSA.registerUser('Person Two', '123wurd', 76)

//////Login User

// theSA.loginUser('Person One', '123Word')

//////Logout User

// theSA.logoutUser('Person One')

// theSA.logoutUser('Person One')

//////Crate Scooter
theSA.createScooter('atxNorth')
// theSA.createScooter('atxWest')

//////Rent Scooter
theSA.rentScooter(1, 'Person One')

//////Dock Scooter

theSA.dockScooter(testScooter, 'atxEast')

console.log(theSA)
// console.log(stations)


module.exports = ScooterApp
