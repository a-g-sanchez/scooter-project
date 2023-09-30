const User = require('../src/User');

const user = new User("Joe Bloggs", "test123", 21);

// User tests here
describe("User property tests", () => {

  // test username
  test("username should be a string", () => {
    expect(typeof user.username).toBe("string");
  })

  // test password
  test('password should be a string', () => {
    expect(typeof user.password).toBe('string')
  })

  // test age
  test('age should be a number', () => {
    expect(typeof user.age).toBe('number')
  })
})

describe('User method tests', () => {

// test login

test('Should log in a user if the password matches', ()=> {
  user.login('test123')
  expect(user.loggedIn).toBe(true)
})

test('Error should be thrown if password does not match', () => {
  expect(() => {
    user.login('123test')
  }).toThrow('Incorrect Password')
} )
  

// test logout
test('Should logout a user if they are logged in', () => {
  user.logout()
  expect(user.loggedIn).toBe(false)
} )

test('Error should be throw if user is not logged in', () => {
  expect(()=> {
    user.logout()
  }).toThrow('User is not logged in')
})

})

