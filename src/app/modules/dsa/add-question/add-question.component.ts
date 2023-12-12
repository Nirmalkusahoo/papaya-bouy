import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared-module/services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpService} from '../../shared-module/services/http.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {LoginModel} from '../../auth/login/login.model';
import {QuestionService} from '../question.service';
import {QuestionModel} from './question.model';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent {
  public questionTitle: FormControl = new FormControl('', [Validators.required]);
  public questionUrl: FormControl = new FormControl('', [Validators.required]);
  public topic: FormControl = new FormControl('', [Validators.required]);
  public number: FormControl = new FormControl('', []);
  public answerUrl: FormControl = new FormControl('', []);
  public conceptUrl: FormControl = new FormControl('', []);
  public hint: FormControl = new FormControl('', []);
  public questionForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private questionService: QuestionService, private matSnackBar: MatSnackBar, public httpService: HttpService, private http: HttpClient, public router: Router,) {
    this.initFormGroup();
  }

  ngOnInit(): void {
  }

  public initFormGroup(): void {
    this.questionForm = this.formBuilder.group({
      topic: this.topic,
      number: this.number,
      questionTitle: this.questionTitle,
      questionUrl: this.questionUrl,
      answerUrl: this.answerUrl,
      conceptUrl: this.conceptUrl,
      hint: this.hint,
    });
  }

  public onSubmit(): void {
    this.questionForm.markAllAsTouched();
    if (this.questionForm.valid) {
      this.questionService.postQuestion(this.getQuestionData()).subscribe(
        (data) => {
          this.showSnackBarMessage('Question posted successfully');
          this.router.navigate(['../list', this.topic.value]);
        },
        (error) => {
        }
      );
    }
  }

  private getQuestionData(): any {
    const questionModel: QuestionModel = new QuestionModel();
    questionModel.topic = this.topic.value;
    questionModel.questionTitle = this.questionTitle.value;
    questionModel.questionUrl = this.questionUrl.value;
    questionModel.hint = this.hint.value;
    questionModel.answerUrl = this.answerUrl.value;
    questionModel.number = this.number.value;
    questionModel.conceptUrl = this.conceptUrl.value;
    return questionModel;
  }

  private showSnackBarMessage(snackBarMessage: string): void {
    this.matSnackBar.open(snackBarMessage, '', {
      duration: 2000,
    });
  }
}
