import { IMessages } from "./interface";

const messages: IMessages = {
  create: {
    sucess: "Oba! Novo registro criado com sucesso.",
    failure: "Ops! Parece que algo deu errado. Por favor, tente novamente.",
  },
  read: {
    sucess: "",
    failure: "Ops! Nenhum registro foi encontraro. Por favor, tente novamente.",
  },
  update: {
    sucess: "",
    failure: "",
  },
  delete: {
    sucess: "",
    failure: "",
  },
};

export default messages;
