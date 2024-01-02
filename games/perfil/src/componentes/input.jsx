import React from 'react';
import Button from 'react-bootstrap/Button';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            previousValue: '', // Armazena o valor anterior do campo
        };
    }

    save = (value) => {
        sessionStorage.setItem(this.props.id, value);
    }

    handleInput = (event) => {
        const data = event.target.value;
        const isDigit = /^\d*$/.test(data);

        if (isDigit) {
            this.setState({ previousValue: data }); // Atualiza o valor anterior se a entrada for um dígito
            this.save(data);
        } else {
            event.preventDefault(); // Impede a alteração se a entrada não for um dígito
            event.target.value = this.state.previousValue; // Reverte o valor do input para o anterior
        }
    };

    render() {
        const { id } = this.props;
        return (
            <div>
                <label>[Add Jogador]</label>
                <input
                    id={id}
                    onInput={this.handleInput}
                    maxLength="4"
                />


<style type="text/css">
        {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
      </style>

      <Button variant="flat" size="xxl">
        flat button
      </Button>
    
            </div>
        );
    }
}

export default Input;



