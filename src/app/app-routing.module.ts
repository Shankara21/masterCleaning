import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IndexAreaComponent } from './pages/area/index-area/index-area.component';
import { CreateAreaComponent } from './pages/area/create-area/create-area.component';
import { EditAreaComponent } from './pages/area/edit-area/edit-area.component';
import { IndexUserComponent } from './pages/user/index-user/index-user.component';
import { CreateUserComponent } from './pages/user/create-user/create-user.component';
import { EditUserComponent } from './pages/user/edit-user/edit-user.component';
import { IndexDataCleaningComponent } from './pages/dataCleaning/index-data-cleaning/index-data-cleaning.component';
import { CreateDataCleaningComponent } from './pages/dataCleaning/create-data-cleaning/create-data-cleaning.component';
import { EditDataCleaningComponent } from './pages/dataCleaning/edit-data-cleaning/edit-data-cleaning.component';
import { ShowDataCleaningComponent } from './pages/dataCleaning/show-data-cleaning/show-data-cleaning.component';
import { IndexChecklistComponent } from './pages/checklist/index-checklist/index-checklist.component';
import { CreateChecklistComponent } from './pages/checklist/create-checklist/create-checklist.component';
import { EditChecklistComponent } from './pages/checklist/edit-checklist/edit-checklist.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ViewChecklistComponent } from './pages/checklist/view-checklist/view-checklist.component';
import { AuthenticationGuard } from './middleware/authentication/authentication.guard';
import { NoAuthenticationGuard } from './middleware/authentication/no-authentication.guard';
import { PrintReportComponent } from './pages/dashboard/print-report/print-report.component';
import { IndexRoleComponent } from './pages/role/index-role/index-role.component';
import { CreateRoleComponent } from './pages/role/create-role/create-role.component';
import { EditRoleComponent } from './pages/role/edit-role/edit-role.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticationGuard] },
  { path: 'dashboard/print', component: PrintReportComponent, canActivate: [AuthenticationGuard] },
  { path: 'login', component: AuthComponent,canActivate:[NoAuthenticationGuard]  },
  { path: 'area', component: IndexAreaComponent, canActivate: [AuthenticationGuard] },
  { path: 'area/create', component: CreateAreaComponent, canActivate: [AuthenticationGuard] },
  { path: 'area/:id/edit', component: EditAreaComponent, canActivate: [AuthenticationGuard] },
  { path: 'user', component: IndexUserComponent, canActivate: [AuthenticationGuard] },
  { path: 'user/create', component: CreateUserComponent, canActivate: [AuthenticationGuard] },
  { path: 'user/:id/edit', component: EditUserComponent, canActivate: [AuthenticationGuard] },
  { path: 'role', component: IndexRoleComponent, canActivate: [AuthenticationGuard]},
  { path: 'role/create', component: CreateRoleComponent, canActivate: [AuthenticationGuard]},
  { path: 'role/:id/edit', component: EditRoleComponent, canActivate: [AuthenticationGuard]},
  { path: 'cleaning-data', component: IndexDataCleaningComponent, canActivate: [AuthenticationGuard] },
  { path: 'cleaning-data/create', component: CreateDataCleaningComponent, canActivate: [AuthenticationGuard] },
  { path: 'cleaning-data/:id', component: ShowDataCleaningComponent, canActivate: [AuthenticationGuard] },
  { path: 'cleaning-data/:id/edit', component: EditDataCleaningComponent, canActivate: [AuthenticationGuard] },
  { path: 'checklist', component: IndexChecklistComponent, canActivate: [AuthenticationGuard] },
  { path: 'checklist/create', component: CreateChecklistComponent, canActivate: [AuthenticationGuard] },
  { path: 'checklist/:id/edit', component: EditChecklistComponent, canActivate: [AuthenticationGuard] },
  { path: 'checklist/:id/view', component: ViewChecklistComponent, canActivate: [AuthenticationGuard] },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
