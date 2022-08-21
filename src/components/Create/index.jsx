import './create.css';
import { useState } from 'react';
import Modal from '../Modal/Modal';

export default function Create({ createPrato, closeModal }) {
  const form = {
    nome: '',
    descricao: '',
    imagem: '',
  };

  const [state, setState] = useState(form);
  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };
  return (
    <>
      <Modal closeModal={closeModal}>
        <div className="AdicionarPratoModal">
          <form autoComplete="false">
            <h2>Adicionar ao Cardapio</h2>
            <div>
              <label className="AdicionarPratoModal__text" htmlFor="">
                Nome do Prato
              </label>
              <input
                id="nome"
                type="text"
                placeholder="Ex: Lasanha"
                value={state.nome}
                onChange={(e) => handleChange(e, 'name')}
              />
            </div>
            <div></div>
            <div></div>
            <div></div>
          </form>
        </div>
      </Modal>
      <div className="Header__opcoes Opcoes">
        <button className="botao" type="submit">
          Add Novo Prato
        </button>
      </div>
    </>
  );
}
