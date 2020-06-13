import { BadRequestException } from '../../index';

describe('BadRequestException', () => {
  it('BadRequestException class', () => {
    const exception = new BadRequestException('some message');
    expect(exception.name).toEqual('BadRequestException');
    expect(exception.message).toEqual('some message');
    expect(exception.status).toEqual(400);
  });
});
