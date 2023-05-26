export interface IUserForm {
  [key: string]: string;
  nickname: string;
  email: string;
  password: string;
}

export interface IUserFormInputs {
  type: string;
  label: string;
  id: string;
}
