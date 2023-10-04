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

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'area', component: IndexAreaComponent },
  { path: 'area/create', component: CreateAreaComponent },
  { path: 'area/:id/edit', component: EditAreaComponent },
  { path: 'user', component: IndexUserComponent },
  { path: 'user/create', component: CreateUserComponent },
  { path: 'user/:id/edit', component: EditUserComponent },
  { path: 'cleaning-data', component: IndexDataCleaningComponent },
  { path: 'cleaning-data/create', component: CreateDataCleaningComponent },
  { path: 'cleaning-data/:id', component: ShowDataCleaningComponent },
  { path: 'cleaning-data/:id/edit', component: EditDataCleaningComponent },
  { path: 'checklist', component: IndexChecklistComponent },
  { path: 'checklist/create', component: CreateChecklistComponent },
  { path: 'checklist/:id/edit', component: EditChecklistComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
