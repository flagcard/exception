import { UnauthorizedUserException } from '../../index';

describe('UnauthorizedUserException', () => {
  it('UnauthorizedUserException class', () => {
    const exception = new UnauthorizedUserException('some message');
    expect(exception.name).toEqual('UnauthorizedUserException');
    expect(exception.message).toEqual('some message');
    expect(exception.status).toEqual(401);
  });
});
