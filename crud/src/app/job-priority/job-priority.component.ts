import { v4 as uuidv4 } from 'uuid';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../share/api.service';



@Component({
  selector: 'app-job-priority',
  templateUrl: './job-priority.component.html',
  styleUrls: ['./job-priority.component.css']
})
export class JobPriorityComponent implements OnInit {
  
  list:any[] = [];
  EmployyeeData!: any;

  constructor( private api: ApiService) { 
    this.api.getEmployee()
      .subscribe(res => {
        this.EmployyeeData = res;
      });
    this.getJobHandle();
  }
  getJobHandle(){
    this.api.getJob()
      .subscribe(res => {
        this.list = res;
      })
  }

  ngOnInit(): void {
  }
  addList(item:string, employ:string){
    this.list.push({id:uuidv4(), job: item, name:employ })
    this.api.postJob(this.list[this.list.length-1]).subscribe(res=>{
      this.getJobHandle();
    })
  }

  removeList(id:number){
    this.list = this.list.filter(i => i.id !== id)
    this.api.deleteJob(id).subscribe(res=>{
      this.getJobHandle();
    })
    
  }
}
