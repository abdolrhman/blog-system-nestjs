import { Test, TestingModule } from '@nestjs/testing';
import { ThumbsController } from './thumbs.controller';

describe('ThumbsController', () => {
  let controller: ThumbsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThumbsController],
    }).compile();

    controller = module.get<ThumbsController>(ThumbsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
