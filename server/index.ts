import App from '@app';
import UserRoute from '@routes/user.route';
import CourseRoute from '@routes/course.route';
import LessonRoute from '@routes/lesson.route';

const app = new App([new UserRoute(), new CourseRoute(), new LessonRoute()]);

app.listen();
