import { MethodNotAllowedException } from '../../index';

describe('MethodNotAllowedException', () => {
  it('MethodNotAllowedException class', () => {
    const exception = new MethodNotAllowedException('some message');
    expect(exception.name).toEqual('MethodNotAllowedException');
    expect(exception.message).toEqual('some message');
    expect(exception.status).toEqual(405);
  });
});
