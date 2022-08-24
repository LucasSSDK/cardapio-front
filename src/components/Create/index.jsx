import './create.css';
import { useState } from 'react';
import Modal from '../Modal/Modal';

export default function Create({ createPrato, closeModal }) {
  const form = {
    name: '',
    descricao: '',
    image: '',
  };

  const [state, setState] = useState(form);
  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };
  return (
    <>
      <Modal closeModal={closeModal}>
        <div className="AdicionarPratoModal">
          <form autoComplete="off">
            <h2>Adicionar Novo Prato ao Cardapio</h2>
            <div>
              <label className="AdicionarPratoModal__text" htmlFor="nome">
                Nome do Prato
              </label>
              <input
                id="nome"
                type="text"
                placeholder="Ex: Lasanha"
                value={state.name}
                onChange={(e) => handleChange(e, 'name')}
              />
            </div>
            <div>
              <label className="AdicionarPratoModal__text" htmlFor="descricao">
                Descreva o Prato
              </label>
              <input
                id="descricao"
                type="text"
                placeholder="Ex: Lasanha é um tipo de massa..."
                value={state.description}
                onChange={(e) => handleChange(e, 'descricao')}
              />
            </div>
            <div>
              <label className="AdicionarPratoModal__imagem" htmlFor="imagem">
                {!state.image.length ? 'Adicione uma imagem' : ''}
              </label>
              <input
                id="imagem"
                type="text"
                accept="image/png, image/gif, image/jpeg"
                placeholder="Add o endereço da imagem"
                value={state.image}
                onChange={(e) => handleChange(e, 'image')}
              />
            </div>
            <div>
              <button className="AdicionarPratoModal__enviar" onClick={() => createPrato()} >Enviar</button>
            </div>
          </form>
        </div>
      </Modal>
      <div className="Header__opcoes Opcoes">
        
      </div>
    </>
  );
}
