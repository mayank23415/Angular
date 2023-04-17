import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StudentService } from "src/app/services/student.service";
import { addStudent, addStudentSuccess, getStudent, getStudentSuccess } from "../actions/student.action";
import { EMPTY, EmptyError, catchError, concatMap, exhaustMap, map, tap } from "rxjs";
import { Student } from "src/app/services/student.model";


@Injectable()
export class StudentEffects {
    constructor(private action$: Actions, private studentService: StudentService) {

    }

    loadStudent = createEffect(()=> this.action$.pipe(
        ofType(getStudent),
        exhaustMap(()=>this.studentService.getStudentList().pipe(
            map((students:ReadonlyArray<Student>)=>(getStudentSuccess(students))),
            catchError(()=> EMPTY)
        ))
    ));
    
    
    addStudent = createEffect(()=> this.action$.pipe(
        ofType(addStudent),
        exhaustMap((newStudent)=>this.studentService.postStudent(new Student(newStudent)).pipe(
            map((student:Student)=>(addStudentSuccess(student))),
            catchError(()=> EMPTY)
        ))
    ));
    
}