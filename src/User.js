class User {
  // User code here
  constructor(username, password, age){
    this.username = username
    this.password = password
    this.age = age
    this.loggedIn = false
  }

  login(password){
    if(this.password !== password){
      throw new Error('Incorrect Password')
    }

    this.loggedIn = true
    console.log('User has been logged in')
  }

  logout(){
    this.loggedIn = false
    console.log('User has been logged out')
  }
}


module.exports = User
