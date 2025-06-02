import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma.service';

describe('PrismaService', () => {
  let service: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();

    service = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call $connect when onModuleInit is called', async () => {
    const connectMock = jest
      .spyOn(service, '$connect')
      .mockResolvedValue(undefined);
    await service.onModuleInit();
    expect(connectMock).toHaveBeenCalled();
    connectMock.mockRestore();
  });
});
