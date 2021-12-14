class Hobbit {
  constructor(name, age){
    this.name = name.name;
    this.age = name.age = 0;
    this.adult = null;
    this.old = false;
    this.hasRing = null;
  };

  celebrateBirthday(){
    this.age++
    if (this.age <= 32){
      this.adult = false
    } else if (this.age >= 33 && this.age < 101){
      this.adult = true
    } else if (this.age >= 101){
      this.old = true
    }
  }



  getRing(){
    if (this.name === "Frodo"){
      this.hasRing = true
      return "Here is the ring!"
    } else {
      this.hasRing = false
      return "You can\'t have it!"
    }
  }
};

module.exports = Hobbit;
