import { createAction, props } from "@ngrx/store";
import { Student } from "src/app/services/student.model";


export const getStudent = createAction('[Student] Get Student');
export const getStudentSuccess = createAction('[Student] Get Student Success', (students: ReadonlyArray<Student>)=>({ students }));

export const addStudent = createAction('[Student] Add Student', (student:Student)=>( student ));
export const addStudentSuccess = createAction('[Student] Add Student Success', (student:Student)=>( student ));

export const deleteStudent = createAction('[Student] Delete Student')
export const deleteStudentSuccess = createAction('[Student] Delete Student Success')