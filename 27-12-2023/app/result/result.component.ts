import { Component } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
    studetns:any[] =[];
     constructor(private _ss : StudentService){

     }
     
     ngOnInit(){
        this.studetns = this._ss.getStudents();
     }
}
