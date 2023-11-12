import { Module } from '@nestjs/common';
import { LectureService } from './lecture.service';
import { LectureController } from './lecture.controller';
import { TeacherModule } from 'src/teacher/teacher.module';

@Module({
  imports: [TeacherModule],
  controllers: [LectureController],
  providers: [LectureService],
})
export class LectureModule {}
