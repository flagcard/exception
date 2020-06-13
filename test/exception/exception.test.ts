import { Exception } from '../../index';

describe('Exception', () => {
  it('Exception class', () => {
    const exception = new Exception('some message');
    expect(exception.name).toEqual('Exception');
    expect(exception.message).toEqual('some message');
    expect(exception.status).toEqual(500);
  });
});
