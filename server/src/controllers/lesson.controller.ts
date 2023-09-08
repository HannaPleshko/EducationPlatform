import { Request, Response, NextFunction } from 'express';
import { LessonService } from '@services/lesson.service';
import { buildResponse } from '@helper/response';

class LessonController {
  private lessonService = new LessonService();

  getLessons = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      buildResponse(res, 200, await this.lessonService.getLessons());
    } catch (error) {
      next(error);
    }
  };

  getLessonById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { lesson_id } = req.params;
      buildResponse(res, 200, await this.lessonService.getLessonById(lesson_id));
    } catch (error) {
      next(error);
    }
  };

  createLesson = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const lesson = req.body;
      buildResponse(res, 201, await this.lessonService.createLesson(lesson));
    } catch (error) {
      next(error);
    }
  };

  updateLesson = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { lesson_id } = req.params;
      const lesson = req.body;
      buildResponse(res, 200, await this.lessonService.updateLesson(lesson_id, lesson));
    } catch (error) {
      next(error);
    }
  };

  deleteLesson = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { lesson_id } = req.params;
      buildResponse(res, 200, await this.lessonService.deleteLesson(lesson_id));
    } catch (error) {
      next(error);
    }
  };
}

export default LessonController;
