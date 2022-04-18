import Class from '@class/Class';

describe('Class Test', () => {
  let instance: Class;

  beforeEach(() => {
    instance = new Class();
  });

  it('Value should be equal to 0', () => {
    expect(instance.value).toBe(0);
  });

  it('Value should be modified and equal to 1', () => {
    instance.value = 1;
    expect(instance.value).toBe(1);
  });

  it('This should fail', () => {
    expect(instance.value).toBe(1);
  });
});
