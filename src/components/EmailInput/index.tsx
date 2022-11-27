import './index.css';

const EmailInput = () => {
  return (
    <div className="emailinput">
      <form>
        <input className="input" type="email" placeholder="E-mail"></input>
        <button>CADASTRAR</button>
      </form>
    </div>
  );
};

export default EmailInput;
