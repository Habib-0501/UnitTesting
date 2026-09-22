import { describe, it, expect } from 'vitest';
import { add, divide } from '../src/calculator';

describe('Calculator', () => {
  it('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should divide two numbers correctly', () => {
    expect(divide(10, 2)).toBe(5);
  });

  it('should throw error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });
});