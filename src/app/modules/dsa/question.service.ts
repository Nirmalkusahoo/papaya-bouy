import {Injectable} from '@angular/core';
import {ValidateUserModel} from '../shared-module/models/sign-up.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {QuestionModel} from './add-question/question.model';
import {HttpService} from '../shared-module/services/http.service';
import {KeyValueModel} from '../shared-module/models/key-value.model';

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
  public getTopics(): Observable<KeyValueModel[]> {
    const url = `assets/jsondata/dsatopiclist.json`;
    // const url: string = environment.baseUrl + environment.getTopics;
    return this.httpService.getData(url);
  }
  public getAllStatus(): Observable<KeyValueModel[]> {
    const url: string = environment.baseUrl + environment.getAllStatus;
    return this.httpService.getData(url);
  }
}
