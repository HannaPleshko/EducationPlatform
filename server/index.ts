import App from '@app';
import UserRoute from '@routes/user.route';
import CourseRoute from '@routes/course.route';

const app = new App([new UserRoute(), new CourseRoute()]);

app.listen();
