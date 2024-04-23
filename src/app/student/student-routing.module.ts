import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'studentCreate', component: StudentCreateComponent },
  { path: 'studentEdit/:id', component: StudentEditComponent },
  //{ path: 'studentDetails/id', component: StudentDetailsComponent}
  { path: 'studentDetails', component: StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
