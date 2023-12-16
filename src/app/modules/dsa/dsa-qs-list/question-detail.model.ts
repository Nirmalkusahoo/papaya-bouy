export class QuestionDetailModel {
  public questionTitle: string;
  public questionUrl: string;
  public answerUrl: string;
  public conceptUrl: string;
  public hint: string;
  public status: string;
  public answerDetails: AnswerDetailModel[] = [];
}

export class AnswerDetailModel {
  public level: string;
  public url: string;
}
