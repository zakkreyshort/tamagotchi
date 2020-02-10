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

})