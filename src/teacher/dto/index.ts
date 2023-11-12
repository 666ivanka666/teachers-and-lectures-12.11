import { IsNotEmpty, IsString } from 'class-validator';

export class TeacherDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;
}
