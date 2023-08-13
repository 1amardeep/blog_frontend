export interface question {
  title: string;
  description: string;
  category: string;
  date: Date;
  color: string;
}

export interface category {
  value: string;
  viewValue: string;
  color: string;
}

export interface QuestionQuery {
  pageIndex: number;
  pageSize: number;
  category: string;
}

export interface AnalyticsData {
  count: number;
  category: string;
  color: string;
}

export interface User {
  email: string;
  password: string;
}

export interface IResponse {
  message: string;
  token: string;
}
