import React, { useState } from 'react';
import './Cardapio.css';

import { ItemService } from '../../Services/PratoService';

import PratoDetalhesModal from 'components/PratoDetalhesModal/PratoDetalhes';
import { useEffect } from 'react';

export default function Cardapio() {
  const [prato, setPratos] = useState([]);
  const [pratoSelecionada, setpratoSelecionada] = useState({});

  const [pratoModal, setPratoModal] = useState(false);

  const adicionarItem = (pratoIndex) => {
    const prato = {
      [pratoIndex]: Number(pratoSelecionada[pratoIndex] || 0) + 1,
    };
    setpratoSelecionada({ ...pratoSelecionada, ...prato });
  };

  const removerItem = (pratoIndex) => {
    const prato = {
      [pratoIndex]: Number(pratoSelecionada[pratoIndex] || 0) - 1,
    };
    setpratoSelecionada({ ...pratoSelecionada, ...prato });
  };

  const badgeCounter = (canRender, index) =>
    Boolean(canRender) && (
      <span className="item__badge">{pratoSelecionada[index] || 0} </span>
    );

  const removeButton = (canRender, index) =>
    Boolean(canRender) && (
      <button
        className="Acoes__remover"
        onClick={(e) => {
          e.stopPropagation();
          removerItem(index);
        }}
      >
        remover da sacola
      </button>
    );

  const getAll = async () => {
    const response = await ItemService.getAll();
    setPratos(response);
  };

  const getById = async (id) => {
    const response = await ItemService.getById(id);
    setPratoModal(response);
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className="cardapioConteiner">
      <>
        {prato.map((item, index) => (
          <div
            className="cardapioItem"
            key={`cardapioItem-${index}`}
          >
            {badgeCounter(pratoSelecionada[index], index)}
            <div className="cardapioName">
              {item.name}
              <div className="cardapioImagem">
                <img src={item.image} alt={item.name} />

                <div>
                  <button
                    className="adicionar"
                    onClick={(e) => {
                      e.stopPropagation();
                      adicionarItem(index);
                    }}
                  >
                    Adicionar a sacola{' '}
                  </button>

                  {removeButton(pratoSelecionada[index], index)}

                  <button
                    className="botaoModal"
                    onClick={() => getById(item.id)}
                  >
                    Conheça este prato
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
      {pratoModal && (
        <PratoDetalhesModal
          prato={pratoModal}
          closeModal={() => setPratoModal(false)}
        />
      )}
    </div>
  );
}
