import{ currencies } from './currencies';

describe ('currencies',() =>{
	it('should return the sopported currencies', () =>{

		const result = currencies();
		expect(result).toContain('USD');
		expect(result).toContain('AUD');
		expect(result).toContain('EUR');
	})
})
