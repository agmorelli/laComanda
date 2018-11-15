import { CapcthaPipe } from './capctha.pipe';

describe('CapcthaPipe', () => {
  it('create an instance', () => {
    const pipe = new CapcthaPipe();
    expect(pipe).toBeTruthy();
  });
});
