import {
  IsString,
  IsNumber,
  IsOptional,
  IsUUID,
  IsBoolean,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInventoryDto {
  @ApiProperty({
    description: 'ID of the material',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  material_id: string;

  @ApiProperty({
    description: 'Number of items in inventory',
    example: 100,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  number_of_inventory: number;

  @ApiProperty({
    description: 'Flag to indicate if the material is available',
    example: true,
    default: true,
  })
  @IsBoolean()
  is_available: boolean;

  @ApiProperty({
    description: 'Detailed description of the inventory record',
    example: 'Stored in climate-controlled area',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;
}
