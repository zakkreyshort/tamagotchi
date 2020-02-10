import { Tamagotchi } from './../src/tamagotchi.js';

describe('Goober', () => {
	jest.useFakeTimers();
	let goober;
	
	beforeEach(function(){
		goober = new Tamagotchi("Goober");
	});

	test('should have a name/hunger/happy levels when created', () => {
		expect(goober.name).toEqual("Goober");
		expect(goober.hunger).toEqual(100);
		expect(goober.happy).toEqual(100);
	});


})