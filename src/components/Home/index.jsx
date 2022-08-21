import './Home.css';
import Cardapio from '../Cardapio/index.jsx';
import Botao from '../Create/index';
import sacola from '../../assets/icons/sacola.svg';
import logo from '../../assets/logo.jpg';

export default function Home() {
  return (
    <div className="Home">
      <div className="Home__header Header">
        <div className="row">
          <div className="Header__logo Logo">
            <img src={logo} width="70px" alt="Logo" className="Logo__icone" />
            <span className="Logo__titulo"> Restaurante </span>
          </div>
          <div className="Header__opcoes Opcoes">
            <div className="Opcoes__sacola Sacola">
              <img
                src={sacola}
                width="40px"
                className="Sacola__icone"
                alt="Sacola de compras"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="homeConteiner">
        <Cardapio clickItem ={(pratoId) => setPratoModal(prato)} />
      </div>
    </div>
  );
}
