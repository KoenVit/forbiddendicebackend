import { Module } from '@nestjs/common';
import { DicerollController } from './diceroll.controller';
import { DicerollService } from './diceroll.service';

@Module({
    controllers: [DicerollController,],
    providers: [DicerollService,],
})
export class DicerollModule {}
