import { getHealthStatus } from './health.js';

describe('getHealthStatus', () => {
    //от 50
    it('healthy', () => {
      expect(getHealthStatus({name: 'Маг', health: 90})).toBe('healthy');
    });
  
    //15-50
    it('wounded', () => {
      expect(getHealthStatus({name: 'Маг', health: 35})).toBe('wounded');
    });
  
    //до 15
    it('critical', () => {
      expect(getHealthStatus({name: 'Маг', health: 5})).toBe('critical');
    });
  });
  
  