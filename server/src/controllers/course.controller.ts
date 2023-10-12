import { Request, Response, NextFunction } from 'express';
import { CourseService } from '@services/course.service';
import { buildResponse } from '@helper/response';

class CourseController {
  private courseService = new CourseService();

  getCourses = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      buildResponse(res, 200, await this.courseService.getCourses());
    } catch (error) {
      next(error);
    }
  };

  getCourseById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { course_id } = req.params;
      buildResponse(res, 200, await this.courseService.getCourseById(course_id));
    } catch (error) {
      next(error);
    }
  };

  createCourse = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const course = req.body;
      buildResponse(res, 201, await this.courseService.createCourse(course));
    } catch (error) {
      next(error);
    }
  };

  updateCourse = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { course_id } = req.params;
      const course = req.body;
      console.log(course_id, course);

      buildResponse(res, 200, await this.courseService.updateCourse(course_id, course));
    } catch (error) {
      next(error);
    }
  };

  deleteCourse = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { course_id } = req.params;
      buildResponse(res, 200, await this.courseService.deleteCourse(course_id));
    } catch (error) {
      next(error);
    }
  };
}

export default CourseController;
