import { DoneTasksFilterPipe } from './donetasksfilter.pipe';

describe('DonetasksfilterPipe', () => {
  it('create an instance', () => {
    const pipe = new DoneTasksFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
