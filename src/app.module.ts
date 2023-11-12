import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from './teacher/teacher.module';
import { LectureService } from './lecture/lecture.service';
import { LectureController } from './lecture/lecture.controller';
import { LectureModule } from './lecture/lecture.module';

@Module({
  imports: [TeacherModule, LectureModule],
  controllers: [AppController, LectureController],
  providers: [AppService, LectureService],
})
export class AppModule {}
