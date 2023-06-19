import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NewOrderController } from './order.controller';
import { NewOrderService } from './order.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Order', schema: 'OrderSchema' },
      { name: 'User', schema: 'UserSchema' },
      { name: 'Item', schema: 'ItemSchema' },
    ]),
  ],
  controllers: [NewOrderController],
  providers: [NewOrderService],
})
export class NewOrderModule {}
