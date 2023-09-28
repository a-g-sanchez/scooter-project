class Scooter{
  static nextSerial = 1
  
  // scooter code here
  constructor(station) {
    this.station = station
    this.user = null
    this.serial = Scooter.nextSerial
    Scooter.nextSerial ++
    this.charge = 100
    this.isBroken = false
  }

  rent(user) {
    
  }
}



module.exports = Scooter
