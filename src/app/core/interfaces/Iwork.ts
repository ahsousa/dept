export interface IWork {
  id: string;
  workTitle: string;
  client: string;
  imgUrlPng?: string;
  imgUrlWebp?: number;
  industry: string;
  category: string;
  sponsored: boolean;
  type: string;
  position: number;
}
