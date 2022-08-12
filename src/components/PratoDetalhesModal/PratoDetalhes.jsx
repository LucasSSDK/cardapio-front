import './PratoDetalhes.css'
import Modal from 'components/Modal/Modal';

function PratoDetalhesModal({prato, closeModal}) {
    return (
        <Modal closeModal ={closeModal}>
            <div className="PaletaDetalhesModal">
                <div className='PratoDetalhesModal__name'>{prato.name}</div>
                <div className='PratoDetalhesModal__descricao'> <b>Descrição</b>{prato.descricao}</div>
                
            </div> 

            <img src={prato.imagem} alt="" className="PratoDetalhesModal__imagem" />

        </Modal>
    );
}

export default PratoDetalhesModal;