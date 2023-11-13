import { Module } from '@nestjs/common';
import { TeacherModule } from './teacher/teacher.module';
import { LectureModule } from './lecture/lecture.module';

@Module({
  imports: [TeacherModule, LectureModule],
})
export class AppModule {}
