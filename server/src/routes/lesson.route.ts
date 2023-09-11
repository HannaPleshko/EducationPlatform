import { Router } from 'express';
import { IRoutes } from '@interfaces';
import LessonController from '@controllers/lesson.controller';

class LessonRoute implements IRoutes {
  public path = '/lesson';

  public router = Router();
  public lessonController = new LessonController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(`${this.path}`, this.lessonController.getLessons);
    this.router.get(`${this.path}/:course_id`, this.lessonController.getLessonById);
    this.router.post(`${this.path}`, this.lessonController.createLesson);
    this.router.put(`${this.path}/:lesson_id`, this.lessonController.updateLesson);
    this.router.delete(`${this.path}/:lesson_id`, this.lessonController.deleteLesson);
  }
}

export default LessonRoute;
