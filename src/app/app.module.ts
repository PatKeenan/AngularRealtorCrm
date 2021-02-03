import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './layoutComps/navigation/navigation.component';
import { DashboardComponent } from './pageComps/dashboard/dashboard.component';
import { FooterComponent } from './layoutComps/footer/footer.component';
import { SignupComponent } from './pageComps/AccountsAndLogin/signup/signup.component';
import { SigninComponent } from './pageComps/AccountsAndLogin/signin/signin.component';
import { ProfileComponent } from './pageComps/AccountsAndLogin/profile/profile.component';

import { AddProjectComponent } from './pageComps/Projects/add-project/add-project.component';
import { UpdateProjectComponent } from './pageComps/Projects/update-project/update-project.component';
import { ProjectDetailComponent } from './pageComps/Projects/project-detail/project-detail.component';
import { ProjectsListComponent } from './pageComps/Projects/projects-list/projects-list.component';
import { AddPersonComponent } from './pageComps/People/add-person/add-person.component';
import { UpdatePersonComponent } from './pageComps/People/update-person/update-person.component';
import { PeopleListComponent } from './pageComps/People/people-list/people-list.component';
import { AddItenComponent } from './pageComps/Itener/add-iten/add-iten.component';
import { ItenDetailComponent } from './pageComps/Itener/iten-detail/iten-detail.component';
import { UpdateItenComponent } from './pageComps/Itener/update-iten/update-iten.component';
import { ItenListComponent } from './pageComps/Itener/iten-list/iten-list.component';
import { PersonDetailComponent } from './pageComps/People/person-detail/person-detail.component';
import { AddFolderComponent } from './pageComps/ActiveFolders/add-folder/add-folder.component';
import { UpdateFolderComponent } from './pageComps/ActiveFolders/update-folder/update-folder.component';
import { FolderDetailComponent } from './pageComps/ActiveFolders/folder-detail/folder-detail.component';
import { FolderListComponent } from './pageComps/ActiveFolders/folder-list/folder-list.component';
import { SignoutComponent } from './pageComps/AccountsAndLogin/signout/signout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    ProfileComponent,
    AddProjectComponent,
    UpdateProjectComponent,
    ProjectDetailComponent,
    ProjectsListComponent,
    AddPersonComponent,
    UpdatePersonComponent,
    PeopleListComponent,
    AddItenComponent,
    ItenDetailComponent,
    UpdateItenComponent,
    ItenListComponent,
    PersonDetailComponent,
    AddFolderComponent,
    UpdateFolderComponent,
    FolderDetailComponent,
    FolderListComponent,
    SignoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
