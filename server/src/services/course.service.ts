import { defaultClient as client, defaultPool as pool } from '@database/connection';
import { CourseDB } from '@database/Classes/CourseDB';
import { ICourse } from '@database/Interfaces';

export class CourseService {
  private courseDB = new CourseDB(client, pool);

  async getCourses(): Promise<ICourse[]> {
    const data = await this.courseDB.getAll();
    return data;
  }

  async getCourseById(course_id: string): Promise<ICourse[]> {
    const data = await this.courseDB.getById(course_id);
    return data;
  }

  async createCourse(course: ICourse): Promise<void> {
    const data = await this.courseDB.create(course);
    return data;
  }

  async updateCourse(course_id: string, course: ICourse): Promise<void> {
    const data = await this.courseDB.updateById(course_id, course);
    return data;
  }

  async deleteCourse(course_id: string): Promise<void> {
    const data = await this.courseDB.deleteById(course_id);
    return data;
  }
}
