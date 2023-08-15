export interface question {
  title: string;
  description: string;
  category: string;
  date: Date;
  color: string;
  userId: string;
  sharedLevel: string;
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
  sharedLevel: string;
  userId: string;
}

interface AnalyticsDataSet {
  count: number;
  category: string;
  color: string;
}

export interface AnalyticsData {
  results: AnalyticsDataSet[];
  totalCount: number;
  publicCount: number;
  privateCount: number;
}

export interface User {
  email: string;
  password: string;
}

export interface IResponse {
  message: string;
  token: string;
  userId: string;
}
