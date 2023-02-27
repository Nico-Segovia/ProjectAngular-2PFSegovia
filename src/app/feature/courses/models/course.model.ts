import { Student } from "../../students/models/student.model";

export interface Course {
    id: number,
    createdAt: Date,
    name: string,
    commission: string;
    startDate: Date;
    endDate: Date;
    openRegistration: boolean;
    description: string,    
    isActive: boolean,    
    enrolledStudents: Array<Student>
}
