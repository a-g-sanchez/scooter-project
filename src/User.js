class User {
  // User code here
  constructor(username, password, age){
    this.username = username
    this.password = password
    this.age = age
    this.loggedIn = false
  }
}

const aaron = new User('Aaron', '123wurd', 83)

console.log(aaron)

module.exports = User
