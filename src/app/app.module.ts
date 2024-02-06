import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './pages/auth/auth.component';
import { IndexAreaComponent } from './pages/area/index-area/index-area.component';
import { CreateAreaComponent } from './pages/area/create-area/create-area.component';
import { EditAreaComponent } from './pages/area/edit-area/edit-area.component';
import { IndexRoleComponent } from './pages/role/index-role/index-role.component';
import { CreateRoleComponent } from './pages/role/create-role/create-role.component';
import { EditRoleComponent } from './pages/role/edit-role/edit-role.component';
import { IndexUserComponent } from './pages/user/index-user/index-user.component';
import { CreateUserComponent } from './pages/user/create-user/create-user.component';
import { EditUserComponent } from './pages/user/edit-user/edit-user.component';
import { IndexDataCleaningComponent } from './pages/dataCleaning/index-data-cleaning/index-data-cleaning.component';
import { CreateDataCleaningComponent } from './pages/dataCleaning/create-data-cleaning/create-data-cleaning.component';
import { EditDataCleaningComponent } from './pages/dataCleaning/edit-data-cleaning/edit-data-cleaning.component';
import { IndexChecklistComponent } from './pages/checklist/index-checklist/index-checklist.component';
import { CreateChecklistComponent } from './pages/checklist/create-checklist/create-checklist.component';
import { EditChecklistComponent } from './pages/checklist/edit-checklist/edit-checklist.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './pipe/search.pipe';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShowDataCleaningComponent } from './pages/dataCleaning/show-data-cleaning/show-data-cleaning.component';
import { SpinnerComponent } from './utils/spinner/spinner.component';
import { ViewChecklistComponent } from './pages/checklist/view-checklist/view-checklist.component';
import { PrintReportComponent } from './pages/dashboard/print-report/print-report.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    IndexAreaComponent,
    CreateAreaComponent,
    EditAreaComponent,
    IndexRoleComponent,
    CreateRoleComponent,
    EditRoleComponent,
    IndexUserComponent,
    CreateUserComponent,
    EditUserComponent,
    IndexDataCleaningComponent,
    CreateDataCleaningComponent,
    EditDataCleaningComponent,
    IndexChecklistComponent,
    CreateChecklistComponent,
    EditChecklistComponent,
    SearchPipe,
    SidebarComponent,
    DashboardComponent,
    ShowDataCleaningComponent,
    SpinnerComponent,
    ViewChecklistComponent,
    PrintReportComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
