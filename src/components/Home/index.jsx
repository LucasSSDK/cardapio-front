import './Home.css';
import { useState } from 'react';
import Cardapio from '../Cardapio/index.jsx';
import sacola from '../../assets/icons/sacola.svg';
import logo from '../../assets/logo.jpg';
import Create from '../Create/index';


export default function Home() {

  const [canShowCreatePrato, setCanShowCreatePrato] = useState(false);
  
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
        <Cardapio />
        {
          
          canShowCreatePrato && (<Create closeModal={() => setCanShowCreatePrato(false)} />)
          // clickItem = { setCanShowCreatePrato(true)}
          
        }
        <Create createPrato = {() => setCanShowCreatePrato(true)}
        />
      </div>
    </div>
  );
}
