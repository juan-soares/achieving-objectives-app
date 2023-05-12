interface IMessages {
  create: {
    sucess: string;
    failure: string;
  };
  read: {
    sucess: string;
    failure: string;
  };
  update: {
    sucess: string;
    failure: string;
  };
  delete: {
    sucess: string;
    failure: string;
  };
}

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
