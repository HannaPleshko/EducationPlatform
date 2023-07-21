import {
  getCourseDB,
  getCourseByIdDB,
  createCourseDB,
  updateCourseDB,
  deleteCourseDB,
} from "../repository/course.repository";

async function getCourse() {
  return await getCourseDB();
}

async function getCourseById(id) {
  return await getCourseByIdDB(id);
}

async function createCourse(title) {
  return await createCourseDB(title);
}

async function updateCourse(id, title) {
  return await updateCourseDB(id, title);
}
async function deleteCourse(id) {
  return await deleteCourseDB(id);
}

export { getCourse, getCourseById, createCourse, updateCourse, deleteCourse };
