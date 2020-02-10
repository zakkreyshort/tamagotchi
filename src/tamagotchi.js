export class Tamagotchi {
  constructor(name){
    this.name = name;
    this.hunger = 100;
    this.happy = 100;
  }

  setHunger() {
    setInterval(() => {
      this.hunger--;
    }, 5000);
  };

  setHappy() {
    setInterval(() => {
      this.happy--;
    }, 5000);
  };


}