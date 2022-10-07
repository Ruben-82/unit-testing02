import { greet } from './greet'; 

describe('greet test suite', () => {
	it('should incluide the name in the menssage'() => {
		expect(greet('Ruben')).toBe('welcome Ruben');
	})

})
