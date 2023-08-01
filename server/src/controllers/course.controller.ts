import { Request, Response, NextFunction } from 'express';
import { CourseService } from '@services/course.service';
import { buildResponse } from '@helper/response';
import { SuccessfullyType } from '@exceptions/exceptions.type';

class CourseController {
  private courseService = new CourseService();

  getCourses = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
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
      await this.courseService.createCourse(course);
      buildResponse(res, 201, SuccessfullyType.DB_USER_SUCCESS_REGISTRATE);
    } catch (error) {
      next(error);
    }
  };

  updateCourse = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { course_id } = req.params;
      const course = req.body;
      await this.courseService.updateCourse(course_id, course);
      buildResponse(res, 200, SuccessfullyType.DB_USER_SUCCESS_CHANGE_CREDENTIALS);
    } catch (error) {
      next(error);
    }
  };

  deleteCourse = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { course_id } = req.params;
      await this.courseService.deleteCourse(course_id);
      buildResponse(res, 200, SuccessfullyType.DB_USER_SUCCESS_DELETE_USER);
    } catch (error) {
      next(error);
    }
  };
}

export default CourseController;
