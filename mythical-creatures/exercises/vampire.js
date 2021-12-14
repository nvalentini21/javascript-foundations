
class Vampire {
  constructor(name,pet = "bat" ) {
    this.name = name;
    this.pet = pet;
    this.thirsty = true;
    this.ouncesDrank = 0;
  }

  drink(){
    this.thirsty = false;
    if (this.ouncesDrank === 50){
      return "I\'m too full to drink anymore!"
    }
    this.ouncesDrank += 10
  }
};






module.exports = Vampire
