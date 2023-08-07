import { defaultClient as client, defaultPool as pool } from '@database/connection';
import { CourseDB } from '@database/Classes/CourseDB';
import { ICourse, TabPreview } from '@database/Interfaces';

export class CourseService {
  private courseDB = new CourseDB(client, pool);

  async getCourses(): Promise<TabPreview> {
    const foundCourses = await this.courseDB.getAll();
    return foundCourses;
  }

  async getCourseById(course_id: string): Promise<ICourse> {
    const foundCourse = await this.courseDB.getById(course_id);
    return foundCourse;
  }

  async createCourse(course: ICourse): Promise<ICourse> {
    const createdCourse = await this.courseDB.create(course);
    return createdCourse;
  }

  async updateCourse(course_id: string, course: ICourse): Promise<ICourse> {
    const updatedCourse = await this.courseDB.updateById(course_id, course);
    return updatedCourse;
  }

  async deleteCourse(course_id: string): Promise<ICourse> {
    const deletedCourse = await this.courseDB.deleteById(course_id);
    return deletedCourse;
  }
}
