import { Module } from '@nestjs/common';
import { DicerollController } from 'src/diceroll/diceroll.controller';

@Module({
  imports: [],
  controllers: [DicerollController],
})
export class AppModule {}
