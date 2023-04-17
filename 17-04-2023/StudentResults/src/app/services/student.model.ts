export class Student {
    _id: String;
    name: String;
    position: String;
    age: number;
    result: number;

    constructor(private student: Student) {
        this._id = student._id;
        this.name = student.name;
        this.position = student.position;
        this.age = student.age;
        this.result = student.result;
    }
}
