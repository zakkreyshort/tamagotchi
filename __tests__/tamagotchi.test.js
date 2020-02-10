import { Tamagotchi } from './../src/tamagotchi.js';

describe('Goober', () => {
	jest.useFakeTimers();
	let goober;
	
	beforeEach(function(){
		goober = new Tamagotchi("Goober");
		goober.setHunger();
		goober.setHappy();
	});

	test('should have a name/hunger/happy levels when created', () => {
		expect(goober.name).toEqual("Goober");
		expect(goober.hunger).toEqual(100);
		expect(goober.happy).toEqual(100);
	});

	test('should decrease hunger by 2 after 10 seconds', () => {
		jest.advanceTimersByTime(10001);
		expect(goober.hunger).toEqual(98);
	});

	test('should decrease happiness by 2 after 10 seconds', () => {
		jest.advanceTimersByTime(10001);
		expect(goober.happy).toEqual(98);
	});

	test('should increase hunger back to 100', () => {
		jest.advanceTimersByTime(5001);
		goober.feed();
		expect(goober.hunger).toEqual(100);
	});

	test('should increase happiness back to 100', () => {
		jest.advanceTimersByTime(5001);
		goober.pet();
		expect(goober.happy).toEqual(100);
	});

	test('should die if hunger & happiness is <= 0', () => {
		goober.hunger = 0;
		goober.happy = 0;
		expect(goober.die()).toEqual(true);
	});

})