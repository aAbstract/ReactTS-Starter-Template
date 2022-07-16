// framwork
import React, { useState, useEffect } from 'react';

// bootstrap
import { Button, Modal, FormControl } from 'react-bootstrap';

// lib
import { subscribe, reg_request } from '../../Lib/mediator';
import { $ } from '../../Lib/dom';

// global vars
let test_var: string = '';

const CustModal: React.FC = () => {
  // state
  const [modal_show, set_modal_show] = useState(false);
  const [modal_title, set_modal_title] = useState('');
  const [modal_body, set_modal_body] = useState('');

  // event handlers
  function close_modal() {
    const elem = $('#modal_inp_field') as HTMLInputElement;
    test_var = elem.value;

    set_modal_show(false);
  }

  useEffect(() => {
    // on mounted or loaded

    // listen to event
    subscribe('modal_show', 'modal_show_func', (args) => {
      set_modal_title(args.modal_title);
      set_modal_body(args.modal_body);

      set_modal_show(true);
    });

    // register mediator request
    reg_request('modal_form_val', (_) => {
      return test_var;
    });

    return () => {
      // on destroy
    }
  }, []);

  return <Modal show={modal_show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
    <Modal.Header closeButton onClick={close_modal}>
      <Modal.Title id="contained-modal-title-vcenter">
        {modal_title}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>{modal_body}</h4>
      <FormControl id='modal_inp_field' />
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={close_modal}>OK</Button>
    </Modal.Footer>
  </Modal>;
};

export default CustModal;