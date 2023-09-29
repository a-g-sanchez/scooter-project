const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

const scooterApp = new ScooterApp();

// ScooterApp tests here

// register user
describe("registerUser method tests", () => {

  test("Should return instance of User", () => {
    let response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
  });

  test('Should check if a user is under the age of 18', () => {
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

  // test('Should test succesfull login', () => {
  //   scooterApp.login('Joe Bloggs', 'test123')
  // })
})

// log out
describe('logout user method tests', ()=> {

  test('Should test error throwing when no such user is logged in', () => {
    expect(() => {
      scooterApp.logoutUser('Aaron G')
    }).toThrow('No such user is logged in')
  })
})

// create scooter

describe('create scooter method test', () => {
  test('Should return instance of Scooter', () => {
    let response = scooterApp.createScooter('atxWest')
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
})

// dock scooter
