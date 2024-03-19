import { classNames } from './classNames';

describe('classNames', () => {
  test('first atr', () => {
    const expected = 'root';
    expect(classNames('root', {}, [])).toBe(expected);
  });
  test('first and last atrs', () => {
    const expected = 'root class1 class2';
    expect(classNames('root', {}, ['class1', 'class2'])).toBe(expected);
  });
  test('no atrs', () => {
    const expected = '';
    expect(classNames('', {}, [])).toBe(expected);
  });
  test('object atr = {_:true,_:false}', () => {
    const expected = ' hovered';
    expect(classNames('', { hovered: true, disabled: false }, [])).toBe(expected);
  });
  test('all atrs', () => {
    const expected = 'class1 class2 class3 hovered disabled';
    expect(classNames('class1', { hovered: true, disabled: true }, ['class2', 'class3'])).toBe(expected);
  });
});
