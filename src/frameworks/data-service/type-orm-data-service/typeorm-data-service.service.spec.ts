import { Test, TestingModule } from '@nestjs/testing';
import { TypeormDataService } from './typeorm-data-service.service';

describe('TypeormdataserviceService', () => {
  let service: TypeormDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeormDataService],
    }).compile();

    service = module.get<TypeormDataService>(TypeormDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
