import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Router } from '@angular/router'
import { PlagirisamService } from '../service/plagirisam.service';

@Component({
  selector: 'app-plagirisam',
  templateUrl: './plagirisam.component.html',
  styleUrls: ['./plagirisam.component.scss']
})
export class PlagirisamComponent implements OnInit {

  public name: string = '';
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 1200;
  totalCounter =1200;
  correctAnswer: number = 0;
  incorrectAnswer: number = 0;
  interval$: any;
  progress: string = '0';
  isQuizCompleted: boolean = false;
  mode = 'quiz';
  // timeLeft: number = 100;
  // interval: any;
  

  constructor(private questionService: PlagirisamService, private router: Router ) {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;
    this.getAllQuestions();
    this.startCounter();
  }

  getAllQuestions() {
    this.questionService.getPlagirismQuestionJson().subscribe((res) => {
      this.questionList = res.questions;
    });
  }

  nextQuestion() {
    this.currentQuestion++;
    this.resetCounter();
    if(this.currentQuestion > this.questionList.length){
      this.isQuizCompleted = true;
    }
  }

  prevQuestion() {
    this.currentQuestion--;
  }

  answer(currentQno: number, option: any) {
    for(let i=0;i<this.questionList[currentQno-1].options.length;i++){
      if(this.questionList[currentQno-1].options[i].text == option.text){
        this.questionList[currentQno-1]['userSelection'] = i;
      }
    }
    if (currentQno === this.questionList.length) {
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if (option.correct) {
      this.questionList[currentQno-1]['isCorrect'] = true;
      this.points += 10;
      this.correctAnswer++;
      setTimeout(() => {
        if(this.currentQuestion <= this.questionList.length){
        this.currentQuestion++;
        this.getProgressPercent();
        // this.resetCounter();
        }
      }, 200);
    } else {
      this.questionList[currentQno-1]['isCorrect'] = false;
      setTimeout(() => {
        if(this.currentQuestion <= this.questionList.length){
        this.currentQuestion++;
        // this.resetCounter();
        this.incorrectAnswer++;
        // for negative mark
        this.getProgressPercent();}
      }, 200);
      // this.points -= 10;
    }
  }

  startCounter() {
    // this.interval = setInterval(() => {
    //   if(this.timeLeft < this.counter) {
    //     this.timeLeft--;
    //   } else {
    //     this.isQuizCompleted = true;
    //   }
    // },6000)
    this.interval$ = interval(1000).subscribe(() => {
      this.counter--;
      if (this.counter === 0) {
        if(this.currentQuestion < this.questionList.length){
          // this.currentQuestion++;
          this.counter = 60;
          if(this.totalCounter === this.counter-1){

          }else{
          this.isQuizCompleted = true;
        }
          
        }else{
          this.isQuizCompleted = true;
        }
        
        // this.points -= 10;
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();

    }, 600000);
  }

  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  resetCounter() {
    this.stopCounter();
    // this.counter = 5;
    this.startCounter();
  }

  // resetQuiz() {
  //   this.resetCounter();
  //   this.getAllQuestions();
  //   this.points = 0;
  //   this.counter = 60;
  //   this.currentQuestion = 0;
  //   this.progress = '0';
  // }

  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100)
      .toFixed(0)
      .toString();

    return this.progress;
  }
  backbtn(){
    this.router.navigate(['/welcome'])
  }
  submitBtn(){
    console.log('Question-Answer',this.questionList);
    this.isQuizCompleted=true;
  }
  onSubmit() {
    console.log(this.getAllQuestions);
  }

}
