import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskPageComponent } from './components/task-page/task-page.component';
import { TagPageComponent } from './components/tag-page/tag-page.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  {path: 'tasks', component: TaskPageComponent},
  {path: 'tags', component: TagPageComponent},
  {path: 'projects', component: ProjectPageComponent},
  {path: '', redirectTo: 'tasks',pathMatch: 'full'},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
