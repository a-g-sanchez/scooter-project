const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

const scooterApp = new ScooterApp()
const testPerson = new User('Test Person', '123Wurd', 78)
scooterApp.registeredUsers[testPerson.username] = testPerson
const testScooter = new Scooter('atxSouth')
scooterApp.stations['atxSouth'].push(testScooter)



// ScooterApp tests here

// register user
describe("registerUser method tests", () => {

  test("Should return instance of User after sucessful signup", () => {
    let response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
  });

  test('Should throw error if user is under 18', () => {
    expect(()=> {
      scooterApp.registerUser('Person One', '123wurd', 16)
    }).toThrow('Too young to register')
  })
});

// log in
describe('login user method tests', () => {
  
  test('Should test error throwing when user does not exist', () => {
    expect(()=> {
      scooterApp.loginUser('Aaron G', '123Word')
    }).toThrow('Username is incorrect')
  })

  test('Should test succesfull login', () => {
    scooterApp.loginUser('Test Person', '123Wurd')
    expect(testPerson.loggedIn).toBe(true)
  })
})

// log out
describe('logout user method tests', ()=> {

  test('Should log a user out if they are signed in', () => {
    scooterApp.logoutUser('Test Person')
    expect(testPerson.loggedIn).toBe(false)
  })

  test('Should test error throwing when no such user is logged in', () => {
    expect(() => {
      scooterApp.logoutUser('Aaron G')
    }).toThrow('No such user is logged in')
  })
})

// create scooter

describe('create scooter method test', () => {

  test('Should return instance of Scooter', () => {
    let response = scooterApp.createScooter('atxNorth')
    expect(response).toBeInstanceOf(Scooter)
  })

  test('Should throw an error when incorrect station is inputed', () => {
    expect(()=>{
      scooterApp.createScooter('atxSounthWest')
    }).toThrow('No such station error')
  })
})

// rent scooter

describe('rent scooter method test', () => {

  test('Should throw error if scooter is unavailable', () => {
    expect(() => {
      scooterApp.rentScooter(3, 'Joe Bloggs')
    }).toThrow('Scooter is unavailable')
  })

  test('Should correctly rent a scooter to a user', () => {
    scooterApp.rentScooter(1, 'Joe Bloggs')
    expect(testScooter.user).toBeInstanceOf(User)
  })
})

// dock scooter

describe('dock scooter method test', ()=> {

  test('Should throw error if station does not exist', () => {
    expect(() => {
      scooterApp.dockScooter(testScooter, 'atxSouthEast')
    }).toThrow('No such station')
  })

  test('Should correctly dock the scooter and remove the user from the scooters user property', () => {
    scooterApp.dockScooter(testScooter, 'atxEast')
    expect(testScooter.user).toBe(null)
  })

  test('Should throw an error if the scooter is already docked at given station', ()=> {
    expect(()=> {
      scooterApp.dockScooter(testScooter, 'atxEast')
    }).toThrow('Scooter is already docked')
  })

})
