export default function ScreenLogin() {
  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="user">Usuário: </label>
        <input type="text" placeholder="E-mail" required />

        <label htmlFor="password">Senha: </label>
        <input type="password" placeholder="***" required />

        <button>Enviar</button>
      </form>
    </div>
  );
}
