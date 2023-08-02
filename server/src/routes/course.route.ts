import { Router } from 'express';
import { IRoutes } from '@interfaces';
import CourseController from '@controllers/course.controller';

class CourseRoute implements IRoutes {
  public path = '/course';

  public router = Router();
  public courseController = new CourseController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(`${this.path}`, this.courseController.getCourses);
    this.router.get(`${this.path}/:course_id`, this.courseController.getCourseById);
    this.router.post(`${this.path}`, this.courseController.createCourse);
    this.router.put(`${this.path}/:course_id`, this.courseController.updateCourse);
    this.router.delete(`${this.path}/:course_id`, this.courseController.deleteCourse);
  }
}

export default CourseRoute;
