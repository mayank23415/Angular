import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';



import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  selectedStudent : Student;
  student : Student[];
  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:3000';

  getStudentList() {
    console.log('getStudentListCalled');
    return this.http.get(this.baseURL);
  }

  postStudent(std: Student) {
    console.log('postStudent is called')
    console.log(std);
    return this.http.post(this.baseURL, std);
  }

  putStudent(std: Student) {
    return this.http.put(this.baseURL +`/${std._id}`, std);
  }

  deleteStudent(_id: String) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
