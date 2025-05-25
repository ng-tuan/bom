import {
  IsString,
  IsOptional,
  IsNumber,
  MinLength,
  MaxLength,
  IsUUID,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMaterialDto {
  @ApiProperty({
    description: 'Name of the material',
    example: 'Steel Plate',
    minLength: 1,
    maxLength: 100,
  })
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  material_name: string;

  @ApiProperty({
    description: 'Detailed description of the material',
    example: 'High-quality steel plate for construction',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Unit of measurement',
    example: 'kg',
    required: false,
    maxLength: 20,
  })
  @IsString()
  @IsOptional()
  @MaxLength(20)
  unit?: string;

  @ApiProperty({
    description: 'Price per unit',
    example: 10.5,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  unit_price?: number;

  @ApiProperty({
    description: 'Number of items in inventory',
    example: 100,
    required: false,
    default: 0,
  })
  @IsNumber()
  @IsOptional()
  number_of_inventory?: number;

  @ApiProperty({
    description: 'Category ID of the material',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  category_id: string;
}
