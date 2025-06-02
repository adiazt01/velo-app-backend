import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '@common/prisma/prisma.service';

describe('Users (service)', () => {
  let service: UsersService;

  beforeEach(async () => {
    const prismaServiceMock = {};

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: prismaServiceMock,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a user', async () => {
      const newUser: CreateUserDto = {
        name: 'Test User',
        email: 'test@example.com',
        password: 'StrongPassword123!',
      };

      const createdUser = await service.create(newUser);

      expect(createdUser).toBeDefined();
    });

    it('should throw an error if user already exists', async () => {});
  });

  describe('findOneByEmail', () => {
    it('should return a user by email', async () => {});

    it('should return a null if user does not exist', async () => {});
  });
});
