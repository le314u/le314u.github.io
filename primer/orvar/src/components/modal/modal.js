import { useState } from 'react';
import { ModalHeader, Divider , ModalDescription, ModalContent, ModalActions, Button, Header, Image, Modal, } from 'semantic-ui-react'
import DATA from '../../data.js'

function ModalExampleModal(props) {

    const [open, setOpen] = useState(false)
    return (
    <Modal open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={props.children}
    >
    
    <ModalContent>
        <h1> Notas sobre Orvar das Formas Infindáveis </h1>
        <p>{DATA.rule_1}</p><Divider clearing />
        <p>{DATA.rule_2}</p><Divider clearing />
        <p>{DATA.rule_3}</p><Divider clearing />
        <p>{DATA.rule_4}</p><Divider clearing />
        <p>{DATA.rule_5}</p><Divider clearing />
        <p>{DATA.rule_6}</p><Divider clearing />
        <p>{DATA.rule_7}</p><Divider clearing />
        <p>{DATA.rule_8}</p><Divider clearing />
        <p>{DATA.rule_9}</p><Divider clearing />
        <p>{DATA.rule_10}</p><Divider clearing />
        <p>{DATA.rule_11}</p><Divider clearing />
        <p>{DATA.rule_12}</p><Divider clearing />
        <p>{DATA.rule_13}</p><Divider clearing />
        <p>{DATA.rule_14}</p><Divider clearing />
        <p>{DATA.rule_15}</p><Divider clearing />
        <p>{DATA.rule_16}</p><Divider clearing />
        <p>{DATA.rule_17}</p><Divider clearing />
        <p>{DATA.rule_18}</p><Divider clearing />
        <p>{DATA.rule_19}</p><Divider clearing />
        <p>{DATA.rule_20}</p><Divider clearing />
        <p>{DATA.rule_21}</p>
    </ModalContent>
    
    <ModalActions>
      <Button
        color='blue'
        content=" OK"
        icon='checkmark'
        onClick={() => setOpen(false)}
      />
    </ModalActions>
  </Modal>
 )
 

}

export default ModalExampleModal