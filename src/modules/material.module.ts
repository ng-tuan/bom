import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Material } from '../entities/material.entity';
import { Category } from '../entities/category.entity';
import { MaterialController } from '../controllers/material.controller';
import { MaterialService } from '../services/material.service';

@Module({
  imports: [TypeOrmModule.forFeature([Material, Category])],
  controllers: [MaterialController],
  providers: [MaterialService],
  exports: [MaterialService],
})
export class MaterialModule {}
