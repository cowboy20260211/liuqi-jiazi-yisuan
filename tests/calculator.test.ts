import { describe, test, expect } from 'vitest';
import { calculate } from '../src/calculator';

describe('calculate function', () => {
  // Parameter validation tests
  test('should return error for invalid renming', () => {
    const result = calculate('无效', '午');
    expect(result).toHaveProperty('error');
  });

  test('should return error for invalid sitian', () => {
    const result = calculate('子', '无效');
    expect(result).toHaveProperty('error');
  });

  // Calculation logic tests
  test('calculate(子, 午) should return correct result', () => {
    const result = calculate('子', '午');
    expect(result).toEqual({
      renming: '子',
      sitian: '午',
      sidi: '酉',
      siren: '戌',
      bingjing: '午',
      bingqi: '少阴君火'
    });
  });

  test('calculate(丑, 未) should return correct result', () => {
    const result = calculate('丑', '未');
    expect(result).toEqual({
      renming: '丑',
      sitian: '未',
      sidi: '戌',
      siren: '酉',
      bingjing: '未',
      bingqi: '太阴湿土'
    });
  });

  test('calculate(寅, 申) should return correct result', () => {
    const result = calculate('寅', '申');
    expect(result).toEqual({
      renming: '寅',
      sitian: '申',
      sidi: '亥',
      siren: '子',
      bingjing: '申',
      bingqi: '少阳相火'
    });
  });
});
