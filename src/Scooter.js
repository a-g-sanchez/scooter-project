class Scooter{
   // scooter code here
  static nextSerial = 1
 
  constructor(station) {
    this.station = station
    this.user = null
    this.serial = Scooter.nextSerial
    Scooter.nextSerial ++
    this.charge = 100
    this.isBroken = false
  }

  rent(user) {
    if(this.charge <20 && !this.isBroken){
      throw new Error('Scooter needs to charge')
    } else if(this.charge >20 && this.isBroken){
      throw new Error('Scooter needs to be repaired')
    }

    this.station = null
    this.user = user
  }


}


module.exports = Scooter
