import { Injectable, NotAcceptableException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Teacher } from './type';

@Injectable()
export class TeacherService {
  private teachers: Teacher[] = [];

  insertTeacher(firstName: string, lastName: string): string {
    const teacherId = uuidv4();
    this.teachers.push(new Teacher(teacherId, firstName, lastName));
    return teacherId;
  }

  getTeacher(): Teacher[] {
    return this.teachers;
  }
  getSingleTeacher(teacherId: string): Teacher {
    const [teacher] = this.findTeacher(teacherId);
    return teacher;
  }

  updateTeacher(
    teacherId: string,
    firstName: string,
    lastName: string,
  ): Teacher {
    const [teacher] = this.findTeacher(teacherId);

    if (firstName) {
      teacher.firstName = firstName;
    }
    if (lastName) {
      teacher.lastName = lastName;
    }

    return teacher;
  }

  deleteTeacher(teacherId: string): { message: string } {
    const [, index] = this.findTeacher(teacherId);
    this.teachers.splice(index, 1);
    return { message: 'Uspijesno izbrisano' };
  }

  findTeacher(id: string): [Teacher, number] {
    const teacherIndex = this.teachers.findIndex(
      (teacher) => teacher.id === id,
    );
    if (teacherIndex === -1) {
      throw new NotAcceptableException(`Teacher with ID ${id} not found`);
    }

    return [this.teachers[teacherIndex], teacherIndex];
  }
}
