import { validate } from 'class-validator';
import { UserDto } from './user.dto';

describe('user (DTO)', () => {
  it('should be defined', () => {
    const user = new UserDto();
    expect(user).toBeDefined();
  });

  it('should initialize with optional and required fields', async () => {
    const user = new UserDto();

    user.id = '123e4567-e89b-12d3-a456-426614174000';
    user.email = 'test@mail.com';
    user.name = 'Test User';
    user.createdAt = new Date();
    user.updatedAt = new Date();

    const errors = await validate(user);

    expect(user.id).toBeDefined();
    expect(user.email).toBeDefined();
    expect(user.name).toBeDefined();
    expect(user.createdAt).toBeDefined();
    expect(user.updatedAt).toBeDefined();
    expect(user.password).toBeUndefined();

    expect(errors.length).toBe(0);
  });
});
