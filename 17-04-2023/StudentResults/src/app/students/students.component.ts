import { Component, OnInit } from '@angular/core';

import { StudentService } from '../services/student.service';
import { NgForm } from '@angular/forms';
import { Student } from '../services/student.model';
import { Store } from '@ngrx/store';
import { addStudent, getStudent, getStudentSuccess } from '../store/actions/student.action';
import { state } from '@angular/animations';
import { Observable } from 'rxjs';
import { StudentState } from '../store/reducers/student.reducer';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [StudentService]
})

export class StudentsComponent implements OnInit {
  service;
  displayedColumns: String[] = ['_id','position', 'name', 'age', 'result'];
  dataSource: Student[] = [];
  student$ = this.store.select('students')
  constructor(private studentService: StudentService, private store: Store<StudentState>) {
    this.service = studentService;
  }

  ngOnInit(): void {
    this.resetForm();
    this.refreshStudentList();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }

    this.service.selectedStudent = {
      _id: "",
      name: "",
      position: "",
      age: null,
      result: null,
    }
  }

  onSubmit(form? : NgForm) {
      this.store.dispatch(addStudent(form.value));
      this.refreshStudentList();
      // this.service.postStudent(form.value).subscribe((res)=> {
      //   this.resetForm(form);
      //   this.refreshStudentList();
      //   console.log(res)
      // })
  }

  refreshStudentList() {
    console.log('refresh students called');
    
    this.store.dispatch(getStudent());
    // this.service.getStudentList().subscribe((res)=> {
    //   this.service.student = res as Student[];
    //   this.dataSource = this.service.student;
    // })
  }

  onEdit(std: Student) {
    this.service.selectedStudent = std;
  }

  onDelete(form: NgForm) {
    if(confirm('Do you want to delete this record') == true) {
      this.service.deleteStudent(form.value._id).subscribe((res)=> {
        this.refreshStudentList();
        this.resetForm(form);
      })
    }
  }
}
