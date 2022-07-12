import { ApiService } from './../share/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface EmployyeeModal {
  id: number,
  name: string,
  email: string,
  mobile: string,
  address: string
}
@Component({
  selector: 'app-employyee-dash',
  templateUrl: './employyee-dash.component.html',
  styleUrls: ['./employyee-dash.component.css']
})

export class EmployyeeDashComponent implements OnInit {

  // search
  user = {
    name: ""
  };

  formValue!: FormGroup;
  EmployyeeData!: any;
  searchEmployyeeData!: any;
  employeeObj: EmployyeeModal = {
    id: 0,
    name: "",
    email: "",
    mobile: "",
    address: ""
  };

  constructor(private formBuild: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuild.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
    })
    this.getEmployeeDetail();
  }
  postEmployeeDetail() {
    this.employeeObj.email = this.formValue.value.email;
    this.employeeObj.mobile = this.formValue.value.mobile;
    this.employeeObj.address = this.formValue.value.address;
    this.employeeObj.name = this.formValue.value.name;
    console.log(this.employeeObj);
    if (this.employeeObj.id === 0) {
      this.api.postEmployee(this.employeeObj)
        .subscribe(res => {
          this.formValue.reset();
          this.getEmployeeDetail();
          document.getElementById("cancel")?.click();
        })
    }
    else {
      this.api.putEmployee(this.employeeObj, this.employeeObj.id)
        .subscribe(res => {
          this.formValue.reset();
          this.getEmployeeDetail();
          document.getElementById("cancel")?.click();
        })
    }

  }
  getEmployeeDetail() {
    this.api.getEmployee()
      .subscribe(res => {
        this.EmployyeeData = res;
        this.searchEmployyeeData = res;
      })
  }
  deleteEmployeeDetail(row: any) {
    this.api.deleteEmployee(row.id)
      .subscribe(res => {
        this.getEmployeeDetail();
      })
  }
  putEmployeeDetail(row: any) {
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['address'].setValue(row.address);
    this.employeeObj.id = row.id;
  }
  searchh() {
    this.searchEmployyeeData = this.EmployyeeData.filter((post: any) => {
      if (this.user.name === '' || post.name.toLowerCase().includes(this.user.name.toLowerCase())) {
        return post;
      }
      return null;
    })
  }
}
