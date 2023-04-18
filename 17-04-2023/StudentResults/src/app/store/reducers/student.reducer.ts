import { Student } from "src/app/services/student.model";
import { addStudent, addStudentSuccess, deleteStudentSuccess, getStudent, getStudentSuccess, updateStudentSuccess } from "../actions/student.action";
import { createReducer, on } from "@ngrx/store";



export interface StudentState{
    students: ReadonlyArray<Student>;
}

const initialState: ReadonlyArray<Student> = [];

export const studentReducer = createReducer(
    initialState, 
    on(getStudent, (state)=> [...state]),
    on(getStudentSuccess, (_state, { students })=>[...students]),
    on(addStudentSuccess, (state, student)=> [...state, student]),
    on(deleteStudentSuccess, (state, { studentId })=> state.filter((student)=> student._id !== studentId)),
    on(updateStudentSuccess, (state, {studentId, student})=> {
        const upStudent = state.map((std)=> {
            if(std._id == studentId) {
                return student;
            }
            return std;
        });
        return upStudent;
    })
)   