import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  @ViewChild('name') nameKey!: ElementRef;
  isQuizCompleted: boolean = false;
  quizService: any;
  route: any;
  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
    }
    );
}

  startQuiz() {
    localStorage.setItem('name', this.nameKey.nativeElement.value);
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    console.log(this.registerForm.value)
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
  }
}
