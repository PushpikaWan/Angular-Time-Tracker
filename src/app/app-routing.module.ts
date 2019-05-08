import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectPageComponent } from 'src/components/project-page/project-page.component';
import { TagPageComponent } from 'src/components/tag-page/tag-page.component';
import { TaskPageComponent } from 'src/components/task-page/task-page.component';
import { NotFoundPageComponent } from 'src/components/not-found-page/not-found-page.component';

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
