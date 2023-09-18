import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contacto() {
  return (
    <Form>
      <Form.Group className="mb-3 input-large" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo: </Form.Label>
        <Form.Control type="email" className="input-large"  placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción</Form.Label>
        <Form.Control className="input-large" as="textarea" rows={3} />
      </Form.Group>
      <Button variant="danger" type="submit" onClick={() => alert('Formulario enviado')}>
        Enviar
      </Button>
    </Form>
  );
}
