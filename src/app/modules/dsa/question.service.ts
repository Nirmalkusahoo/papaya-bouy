import {Injectable} from '@angular/core';
import {ValidateUserModel} from '../shared-module/models/sign-up.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {QuestionModel} from './add-question/question.model';
import {HttpService} from '../shared-module/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(public httpService: HttpService) {
  }

  public postQuestion(questionData: QuestionModel): Observable<any> {
    const url: string = environment.baseUrl + environment.addQuestion;
    return this.httpService.postData(url, questionData);
  }
}
