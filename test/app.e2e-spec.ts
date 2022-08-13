import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';

describe('App Test', () => {
  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();
  });


  it.todo("X");
});
