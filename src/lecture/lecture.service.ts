import { Injectable, NotAcceptableException } from '@nestjs/common';
import { Lecture } from './type';
import { TeacherService } from 'src/teacher/teacher.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class LectureService {
  private lecture: Lecture[] = [];
  constructor(private readonly teacherService: TeacherService) {}

  insertLecture(name: string, description: string, teacherId: string): string {
    const lectureId = uuidv4();
    this.teacherService.findTeacher(teacherId);
    this.lecture.push(new Lecture(lectureId, name, description, teacherId));
    return lectureId;
  }
  getLecture(): Lecture[] {
    return this.lecture;
  }

  getSingleLecture(lectureId: string): Lecture {
    const [lecture] = this.findLecture(lectureId);
    return lecture;
  }
  updateLecture(
    lectureId: string,
    name: string,
    description: string,
    teacherId: string,
  ): Lecture {
    this.teacherService.findTeacher(teacherId);

    const [lecture] = this.findLecture(lectureId);
    if (name) {
      lecture.name = name;
    }
    if (description) {
      lecture.description = description;
    }
    if (teacherId) {
      lecture.teachersId = teacherId;
    }
    return lecture;
  }

  deleteLecture(lectureId: string) {
    const [, index] = this.findLecture(lectureId);
    this.lecture.splice(index, 1);
    return { message: 'Uspjesno obrisano' };
  }

  findLecture(id: string): [Lecture, number] {
    const lectureIndex = this.lecture.findIndex((lecture) => lecture.id === id);
    if (lectureIndex === -1) {
      throw new NotAcceptableException(`Lecture with ID ${id} not found`);
    }
    return [this.lecture[lectureIndex], lectureIndex];
  }
}
