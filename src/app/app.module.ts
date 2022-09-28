import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
import { NextLevelComponent } from './next-level/next-level.component';
import { Next2LevelComponent } from './next2-level/next2-level.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountdownModule } from 'ngx-countdown';
import { LawQuestionComponent } from './law-question/law-question.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { CitationComponent } from './citation/citation.component';
import { ResearchEthicsComponent } from './research-ethics/research-ethics.component';
import { HypothesisComponent } from './hypothesis/hypothesis.component';
import { PlagirisamComponent } from './plagirisam/plagirisam.component';
import { SecondaryDataComponent } from './secondary-data/secondary-data.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionComponent,
    HeaderComponent,
    ChangeBgDirective,
    NextLevelComponent,
    Next2LevelComponent,
    LawQuestionComponent,
    WelcomePageComponent,
    CitationComponent,
    ResearchEthicsComponent,
    HypothesisComponent,
    PlagirisamComponent,
    SecondaryDataComponent
  ],
  imports: [BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CountdownModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
