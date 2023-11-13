import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { Teacher } from './type';
import { IdDto } from 'src/common/decorators';
import { TeacherDto } from './dto';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  addTeacher(@Body() body: TeacherDto): { id: string } {
    const generatedId = this.teacherService.insertTeacher(
      body.firstName,
      body.lastName,
    );
    return { id: generatedId };
  }

  @Get()
  getAllTeachers(): Teacher[] {
    return this.teacherService.getTeacher();
  }

  @Get(':id')
  getTeacherById(@Param() params: IdDto): Teacher {
    return this.teacherService.getSingleTeacher(params.id);
  }

  @Put(':id')
  updateTeacher(@Param() params: IdDto, @Body() body: TeacherDto): Teacher {
    const { id } = params;
    return this.teacherService.updateTeacher(id, body.firstName, body.lastName);
  }

  @Delete(':id')
  deleteTeacherById(@Param() params: IdDto): { message: string } {
    return this.teacherService.deleteTeacher(params.id);
  }
}
