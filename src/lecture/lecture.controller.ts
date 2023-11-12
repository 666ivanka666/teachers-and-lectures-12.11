import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LectureService } from './lecture.service';
import { LectureDto } from './dto';
import { Lecture } from './type';
import { IdDto } from 'src/common/decorators';

@Controller('lecture')
export class LectureController {
  constructor(private readonly lectureService: LectureService) {}

  @Post()
  addLecture(@Body() body: LectureDto): { id: string } {
    const generatedId = this.lectureService.insertLecture(
      body.name,
      body.description,
      body.teachersId,
    );
    return { id: generatedId };
  }
  @Get()
  getAllLectures(): Lecture[] {
    return this.lectureService.getLecture();
  }

  @Get(':id')
  getLectureById(@Param() params: IdDto): Lecture {
    return this.lectureService.getSingleLecture(params.id);
  }

  @Put(':id')
  updateLecture(@Param() params: IdDto, @Body() body: LectureDto): Lecture {
    const { id } = params;
    return this.lectureService.updateLecture(
      id,
      body.name,
      body.description,
      body.teachersId,
    );
  }
  @Delete(':id')
  deleteLectureById(@Param() params: IdDto): { message: string } {
    return this.lectureService.deleteLecture(params.id);
  }
}
