export class Story {
  public header: string;
  public title: string;
  public paras: Para[] = [];
}

export class Para {
  public title: string;
  public description: string;
  public codeDetails: Code[] = [];
}

export class Code {
  public title: string;
  public code: string;
}
