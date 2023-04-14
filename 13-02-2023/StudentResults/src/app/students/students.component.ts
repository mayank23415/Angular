import { Component, OnInit } from '@angular/core';

import { StudentService } from '../services/student.service';
import { NgForm } from '@angular/forms';
import { Student } from '../services/student.model';

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
  displayedColumns: String[] = ['_id','position', 'name', 'age', 'result'];;
  dataSource ;
  constructor(private studentService: StudentService) {
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
      this.service.postStudent(form.value).subscribe((res)=> {
        this.resetForm(form);
        this.refreshStudentList();
        console.log(res)
      })
  }

  refreshStudentList() {
    this.service.getStudentList().subscribe((res)=> {
      this.service.student = res as Student[];
      this.dataSource = this.service.student;
    })
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
