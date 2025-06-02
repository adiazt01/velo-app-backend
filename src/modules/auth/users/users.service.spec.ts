import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('Users (service)', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a user', async () => {
      
    })

    it('should throw an error if user already exists', async () => {
      
    });
  })

  describe('findOneByEmail', () => {
    it('should return a user by email', async () => {
      
    });

    it('should return a null if user does not exist', async () => {
      
    });
  })
});
