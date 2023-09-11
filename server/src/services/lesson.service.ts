import { defaultClient as client, defaultPool as pool } from '@database/connection';
import { LessonDB } from '@database/Classes/LessonDB';
import { ILesson, TabPreview } from '@database/Interfaces';

export class LessonService {
  private lessonDB = new LessonDB(client, pool);

  async getLessons(): Promise<TabPreview> {
    const foundLessons = await this.lessonDB.getAll();
    return foundLessons;
  }

  async getLessonById(course_id: string): Promise<ILesson> {
    console.log(course_id);

    const foundLeeson = await this.lessonDB.getById(course_id);
    console.log(course_id);

    return foundLeeson;
  }

  async createLesson(lesson: ILesson): Promise<ILesson> {
    const createdLesson = await this.lessonDB.create(lesson);
    return createdLesson;
  }

  async updateLesson(lesson_id: string, lesson: ILesson): Promise<ILesson> {
    const updatedLesson = await this.lessonDB.updateById(lesson_id, lesson);
    return updatedLesson;
  }

  async deleteLesson(lesson_id: string): Promise<ILesson> {
    const deletedLesson = await this.lessonDB.deleteById(lesson_id);
    return deletedLesson;
  }
}
