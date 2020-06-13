import { UnauthorizedException } from '../../index';

describe('UnauthorizedUserException', () => {
  it('UnauthorizedUserException class', () => {
    const exception = new UnauthorizedException('some message');
    expect(exception.name).toEqual('UnauthorizedException');
    expect(exception.message).toEqual('some message');
    expect(exception.status).toEqual(401);
  });
});
