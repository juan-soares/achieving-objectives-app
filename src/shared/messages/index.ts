import { IMessages } from "./interface";

const messages: IMessages = {
  create: {
    sucess: "Oba! Novo registro criado com sucesso.",
    failure: "Ops! Parece que algo deu errado. Por favor, tente novamente.",
  },
  read: {
    sucess: "",
    failure:
      "Ops! O que procura parece não estar por aqui. Por favor, tente novamente.",
  },
  update: {
    sucess: "Alteração realizada com sucesso!",
    failure: "Oops! Não foi possível atualizar. Por favor, tente novamente",
  },
  delete: {
    sucess: "Registro removido com sucesso!",
    failure:
      "Ops! Algo não se saiu bem ao remover. Por favor, tente novamente.",
  },
};

export default messages;
