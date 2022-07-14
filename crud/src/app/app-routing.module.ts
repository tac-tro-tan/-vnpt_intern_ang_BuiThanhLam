import { EmployyeeDashComponent } from './employyee-dash/employyee-dash.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobPriorityComponent } from './job-priority/job-priority.component';

const routes: Routes = [
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'products', component: EmployyeeDashComponent},
  {path:'products/job', component: JobPriorityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
