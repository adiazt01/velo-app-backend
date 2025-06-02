import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';

describe('Auth (service)', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create user', () => {
    it('should create a new user and return access token and refresh token', () => {
      expect
    });

    it('should throw an error if user already exists', () => {

    });
  });

  describe('login user', () => {
    it('should return access token and refresh token', () => {

    });

    it('should throw an error if user does not exist', () => {

    });

    it('should throw an error if password is incorrect', () => {

    });
  });
});
