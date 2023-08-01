import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import CourseController from '@controllers/course.controller';

class CourseRoute implements Routes {
  public path = '/course';

  public router = Router();
  public courseController = new CourseController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(`${this.path}`, this.courseController.getCourses);
    this.router.get(`${this.path}/:course_id`, this.courseController.getCourseById);
    this.router.post(`${this.path}`, this.courseController.updateCourse);
    this.router.put(`${this.path}/:course_id`, this.courseController.updateCourse);
    this.router.delete(`${this.path}/:course_id`, this.courseController.deleteCourse);
  }
}

export default CourseRoute;
