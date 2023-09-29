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
    }).toThrow('Username or password is incorrect')
  })

  // test('Should test succesfull login', () => {
  //   scooterApp.login('Joe Bloggs', 'test123')
  // })
})

// log out

// rent scooter

// dock scooter
