import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { HonorsComponent } from './honors/honors.component';
import { PublicationsComponent } from './publications/publications.component';
import { ScoresComponent } from './scores/scores.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: 'education', component: EducationComponent },
  { path: 'honors', component: HonorsComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'scores', component: ScoresComponent },
  { path: 'skills', component: SkillsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
