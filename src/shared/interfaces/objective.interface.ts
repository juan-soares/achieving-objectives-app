export interface IObjective {
  id?: number;
  user?: string | null;
  title: string;
  goal: number;
  description: string;
  incomes: [];
}
