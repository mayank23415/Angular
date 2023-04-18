import { Component, OnInit } from '@angular/core';

import { StudentService } from '../services/student.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Student } from '../services/student.model';
import { Store } from '@ngrx/store';
import { addStudent, deleteStudent, getStudent, updateStudent} from '../store/actions/student.action';
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
  displayedColumns: String[] = ['_id','position', 'name', 'age', 'result'];
  dataSource: Student[] = [];
  reactiveForm: FormGroup;
  student$ = this.store.select('students');


  constructor(private store: Store<StudentState>) {
  }

  ngOnInit(): void{
    this.reactiveForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      position: new FormControl(null, [Validators.required, this.checkSpace]),
      age: new FormControl(null, [Validators.required]),
      _id: new FormControl(null, [Validators.required,this.checkSpace]),
      result: new FormControl(null, [Validators.required])
    })
    this.resetForm();
    this.refreshStudentList();
  }

  resetForm():void{
    this.reactiveForm.reset()

    // this.service.selectedStudent = {
    //   _id: "",
    //   name: "",
    //   position: "",
    //   age: null,
    //   result: null,
    // }
  }

  onSubmit(form? : NgForm):void{
      this.store.dispatch(addStudent(this.reactiveForm.value));
      this.refreshStudentList();
      // this.service.postStudent(form.value).subscribe((res)=> {
      //   this.resetForm(form);
      //   this.refreshStudentList();
      //   console.log(res)
      // })
  }

  refreshStudentList():void{
    console.log('refresh students called');
    
    this.store.dispatch(getStudent());
    // this.service.getStudentList().subscribe((res)=> {
    //   this.service.student = res as Student[];
    //   this.dataSource = this.service.student;
    // })
  }

  checkSpace(control : FormControl){
    if(control.value != null && control.value.indexOf(' ') != -1) {
      return {checkSpace : true};
    }
    return null;
  }

  editFormVisible : boolean = true;
  toEdit() {
    if(this.editFormVisible) {
      this.editFormVisible = false;
    }else {
      this.editFormVisible = true;
    }
  }
  onEdit() {
    const id= JSON.stringify(this.reactiveForm.value._id);
    this.store.dispatch(updateStudent(id, this.reactiveForm.value));
    this.refreshStudentList();
  }

  _idDel: string;
  onDelete() {
    console.log(this._idDel);
    const id = JSON.stringify(this._idDel);
    this.store.dispatch(deleteStudent(id));
    this.refreshStudentList();
  }
}
