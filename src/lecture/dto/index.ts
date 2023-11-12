import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class LectureDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  teachersId: string;
}
