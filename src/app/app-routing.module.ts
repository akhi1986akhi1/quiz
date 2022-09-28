import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitationComponent } from './citation/citation.component';
import { LawQuestionComponent } from './law-question/law-question.component';
import { NextLevelComponent } from './next-level/next-level.component';
import { Next2LevelComponent } from './next2-level/next2-level.component';
import { QuestionComponent } from './question/question.component';
import { ResearchEthicsComponent } from './research-ethics/research-ethics.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PlagirisamComponent } from './plagirisam/plagirisam.component';
import { HypothesisComponent } from './hypothesis/hypothesis.component';
import { SecondaryDataComponent } from './secondary-data/secondary-data.component';




const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'question',
    component: QuestionComponent,
  },
  {
    path: 'nextLevel',
    component: NextLevelComponent,
  },
  {
    path: 'next2Level',
    component: Next2LevelComponent,
  },
  {
    path: 'lawQuizz',
    component: LawQuestionComponent,
  },
  {
    path: 'welcome-page',
    component: WelcomePageComponent,
  },
  {
    path: 'citation',
    component: CitationComponent,
  },
  {
    path: 'researchEthics',
    component: ResearchEthicsComponent,
  },
  {
    path: 'plagirisam',
    component: PlagirisamComponent,
  },
  {
    path: 'hypothesis',
    component: HypothesisComponent,
  },
  {
    path: 'secondarydata',
    component: SecondaryDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule {}
