import { JoinFullNamePipe } from './join-full-name.pipe';

describe('JoinFullNamePipe', () => {
  it('create an instance', () => {
    const pipe = new JoinFullNamePipe();
    expect(pipe).toBeTruthy();
  });
});
