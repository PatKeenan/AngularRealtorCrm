import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './pageComps/AccountsAndLogin/profile/profile.component';
import { SigninComponent } from './pageComps/AccountsAndLogin/signin/signin.component';
import { SignoutComponent } from './pageComps/AccountsAndLogin/signout/signout.component';
import { SignupComponent } from './pageComps/AccountsAndLogin/signup/signup.component';
import { FolderListComponent } from './pageComps/ActiveFolders/folder-list/folder-list.component';
import { DashboardComponent } from './pageComps/dashboard/dashboard.component';
import { ItenDetailComponent } from './pageComps/Itener/iten-detail/iten-detail.component';
import { ItenListComponent } from './pageComps/Itener/iten-list/iten-list.component';
import { PeopleListComponent } from './pageComps/People/people-list/people-list.component';
import { ProjectsListComponent } from './pageComps/Projects/projects-list/projects-list.component';







const routes: Routes = [
  {path: '', redirectTo:"/sign-in", pathMatch:"full"},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'sign-in', component: SigninComponent},
  {path: 'sign-up', component: SignupComponent},
  {path: 'sign-out', component: SignoutComponent},
  {path: 'settings', component: ProfileComponent},
  {path: 'people', component: PeopleListComponent},
  {path: 'projects', component: ProjectsListComponent},
  {path:'itineraries', component: ItenListComponent},
  {path: 'itineraries/details', component:ItenDetailComponent},
  {path: 'active-folders', component: FolderListComponent},
  {path: '**', redirectTo:"/dashboard"},
  
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
