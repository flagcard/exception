import { NotFoundException } from '../../index';

describe('NotFoundException', () => {
  it('NotFoundException class', () => {
    const exception = new NotFoundException('some message');
    expect(exception.name).toEqual('NotFoundException');
    expect(exception.message).toEqual('some message');
    expect(exception.status).toEqual(404);
  });
});
