import { useState } from "react"
import Modal from '@mui/material/Modal'
import './Cadastroanimal.css';
import Radio from '@mui/material/Radio'
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';



function CadastroAnimal() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
    ({ theme, checked }) => ({
      '.MuiFormControlLabel-label': checked && {
        color: theme.palette.primary.main,
      },
    }),
  );

  function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
  }

  MyFormControlLabel.propTypes = {
    /**
     * The value of the component.
     */
    value: PropTypes.any,
  };

  return (
    <div className='app'>

      <header className="logo">
        <img src="/imagens/logozoocasc.jpg" className="img-logo" />
        <div className="conta">
          <button className="email">email</button>
        </div>
      </header>
      <header className="barra">
        <button className="consultani">Cadastrar Animal</button>
      </header>
      <header className="titulo">
        <t1 className="consultaranimal">
          Cadastrar Animal
        </t1>
        <p></p>
        <t2 className="digite">
          Preencha os campos de acordo com as informações do animal
        </t2>
      </header>

      <div className="barrapesquisa">
        <div className="bal">
          <label className="lab">Apelido</label>
          <input type="text" placeholder='...' className='search' />
        </div>
        <div className="bal">
          <label className="lab">Idade</label>
          <input type="text" placeholder='...' className='search' />
        </div>
        <div className="bal">
          <label className="lab">Sexo</label>
          <input type="text" placeholder='...' className='search' />
        </div>
      </div>

      <div className="barrapesquisa">
        <div className="bal">
          <label className="lab">Identificação</label>
          <input type="text" placeholder='...' className='search' />
        </div>
        <div className="bal">
          <label className="lab">Codigo</label>
          <input type="text" placeholder='...' className='search' />
        </div>
        <div className="bal">
          <label className="lab">Habitat</label>
          <input type="text" placeholder='...' className='search' />
        </div>
      </div>

      <div className="barrapesquisa">
        <div className="bal">
          <label className="lab">Especie</label>
          <input type="text" placeholder='...' className='search' />
        </div>
        <div className="bal">
          <label className="lab">Status</label>
          <input type="text" placeholder='...' className='search' />
        </div>
        <div className="bal">
          <label className="lab">Data de entrada</label>
          <input type="text" placeholder='...' className='search' />
        </div>
      </div>
      <div className="add"><button className="adicionar">Cadastrar</button></div>
      <p></p>
      <div className="cadastro" onClick={handleOpen}><button className="cadastrar">Cadastrar uma nova especie</button></div>
      <Modal
        className="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="fundo">
          <div>
              <div className="bal">
                <label className="lab">Nova Espécie</label>
                <input type="text" placeholder='...' className='search' />
              </div>
              <div className="nov">
                <label className="lab">Nome Cientifíco</label>
                <input type="text" placeholder='...' className='search' />
              </div>
              <RadioGroup name="use-radio-group" defaultValue="first">
                <MyFormControlLabel value="first" label="Chip" control={<Radio />} />
                <MyFormControlLabel value="second" label="Anilha" control={<Radio />} />
              </RadioGroup>
              <div className="bo"><button className="especie">Cadastrar</button></div>
          </div>
        </div>

      </Modal>
    </div>

  );

}


export default CadastroAnimal;
