export class Tamagotchi {
  constructor(){
    this.name = "";
    this.hunger = 100;
    this.happy = 100;
  }

  setName(){
    this.name = name;
  }

  setHunger() {
    setInterval(() => {
      this.hunger-=10;
    }, 1000);
  }

  setHappy() {
    setInterval(() => {
      this.happy-=10;
    }, 1000);
  }

  start(){
    this.hunger = 100;
    this.happy = 100;
  }

  feed() {
    this.hunger += 15;
    this.happy += 10; 
  }

  pet(){
    this.happy += 15;
  }

  die(){
    if((this.hunger <= 0) || (this.happy <= 0)){
      return true;
    } else{
      return false;
    }
  }

}