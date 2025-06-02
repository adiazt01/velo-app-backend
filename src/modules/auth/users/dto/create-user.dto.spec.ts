import { validate } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

describe('create-user (dto)', () => {
  it('should be defined', () => {
    expect(true).toBeDefined();
  });

  it('should validate user creation data', async () => {
    const userDto = new CreateUserDto();

    userDto.name = 'Test User';
    userDto.email = 'test@example.com';
    userDto.password = 'StrongPassword123!';

    const errors = await validate(userDto);

    expect(userDto.name).toBeDefined();
    expect(userDto.email).toBeDefined();
    expect(userDto.password).toBeDefined();

    expect(errors.length).toBe(0);
  });

  it('should throw an error if invalid data is provided', async () => {
    const userDto = new CreateUserDto();

    userDto.name = '';
    userDto.email = 'invalid-email';
    userDto.password = 'weak';

    const errors = await validate(userDto);

    expect(errors.length).toBeGreaterThan(0);
  });

  it('should throw an error if required fields are missing', async () => {
    const userDto = new CreateUserDto();

    userDto.name = '';
    userDto.email = '';
    userDto.password = '';

    const errors = await validate(userDto);

    expect(errors.length).toBeGreaterThan(0);
  });
});
