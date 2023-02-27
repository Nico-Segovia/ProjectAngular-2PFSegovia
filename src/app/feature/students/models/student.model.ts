import { Course } from "../../courses/models/course.model";
export interface Student {
    id: number,
    createdAt: Date,
    name: string,
    surname: string,
    email: string,
    documentNumber: number,
    isActive: boolean,
    phoneNumber: number
    enrolledCourses: Array<Course>
}
