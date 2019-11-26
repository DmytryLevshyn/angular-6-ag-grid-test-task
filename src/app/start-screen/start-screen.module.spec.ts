import { StartScreenModule } from './start-screen.module';

describe('StartScreenModule', () => {
  let startScreenModule: StartScreenModule;

  beforeEach(() => {
    startScreenModule = new StartScreenModule();
  });

  it('should create an instance', () => {
    expect(startScreenModule).toBeTruthy();
  });
});
