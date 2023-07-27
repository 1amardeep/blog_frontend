export interface question {
  title: string;
  description: string;
  category: string;
  date: Date;
}

export interface category {
  value: string;
  viewValue: string;
}

export interface QuestionQuery {
  pageIndex: number;
  pageSize: number;
  category: string;
}
