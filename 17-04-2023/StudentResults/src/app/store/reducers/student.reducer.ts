import { createReducer, on } from "@ngrx/store";
import { Student } from "src/app/services/student.model";
import { addStudent, addStudentSuccess, getStudent, getStudentSuccess } from "../actions/student.action";


export interface StudentState{
    students: ReadonlyArray<Student>;
}

const initialState: ReadonlyArray<Student> = [];

export const studentReducer = createReducer(
    initialState, 
    on(getStudent, (state)=> [...state]),
    on(getStudentSuccess, (_state, { students })=>[...students]),
    on(addStudentSuccess, (state, student)=> [...state, student])
)   