const Scooter = require('../src/Scooter')
const User = require('../src/User')

const scooter = new Scooter();
const testUser = new User('The User', '123Wurd', 28)

//typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    expect(scooter).toBeInstanceOf(Scooter);
  });
})

//Method tests
describe('scooter methods', () => {
  // tests here!
  //rent method
  test('rent method should throw an error when scooter needs to charge', () => {
    scooter.charge = 15
    expect(() => {
      scooter.rent()
    }).toThrow('Scooter needs to charge')
  })

  test('rent method should throw an error when scooter needs repair', () => {
    expect(() => {
      scooter.charge = 100
      scooter.isBroken = true
      scooter.rent()
    }).toThrow('Scooter needs to be repaired')
  })

  test('rent method should rent to a user when it is in good repair' , () => {
    scooter.isBroken = false
    scooter.rent(testUser)
    expect(scooter.user).toBeInstanceOf(User)
  })
  

  //dock method

  //requestRepair method

  //charge method

})
