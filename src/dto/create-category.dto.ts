import { IsString, IsOptional, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({
    description: 'Name of the category',
    example: 'Raw Materials',
    minLength: 1,
    maxLength: 100,
  })
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  category_name: string;

  @ApiProperty({
    description: 'Detailed description of the category',
    example: 'Basic materials used in production',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;
}
