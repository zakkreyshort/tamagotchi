export class Tamagotchi {
  constructor(name){
    this.name = name;
    this.hunger = 10;
    this.happy = 10;
  }

  setHunger() {
    setInterval(() => {
      this.hunger-=1;
    }, 2000);
  }

  setHappy() {
    setInterval(() => {
      this.happy-=1;
    }, 2000);
  }

  feed() {
    this.hunger = 100;
  }

  pet(){
    this.happy = 100;
  }

  die(){
    if((this.hunger === 0) && (this.happy === 0)){
      return true;
    } else{
      return false;
    }
  }

}