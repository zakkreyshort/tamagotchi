export class Tamagotchi {
  constructor(name){
    this.name = name;
    this.hunger = 100;
    this.happy = 100;
  }

  setHunger() {
    setInterval(() => {
      this.hunger-=1;
    }, 1000);
  }

  setHappy() {
    setInterval(() => {
      this.happy-=1;
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
    if((this.hunger === 0) && (this.happy === 0)){
      return true;
    } else{
      return false;
    }
  }

}