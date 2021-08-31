import React, { useEffect } from 'react';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Company from '../../model/Company';

export interface CompanyDetailProps {
  company?: Company;
  errorMessage?: string;
  success?: boolean;
  onSave?: (company: Company) => void;
  onCancel?: () => void;
}

export default function CompanyDetailForm(props: CompanyDetailProps) {
  const { register, watch } = useForm<Company>();

  const errorMessage = props.errorMessage && <Alert variant='danger'>{props.errorMessage!}</Alert>;

  const nameWatch = watch('name', '');
  const activityWatch = watch('activity');
  const [isFormFilled, setIsFormFilled] = React.useState<boolean>(false);

  useEffect(() => {
    nameWatch && activityWatch ? setIsFormFilled(true) : setIsFormFilled(false);
  }, [nameWatch, activityWatch]);

  const onSave = () => {
    props.onSave && props.onSave({ id: '', name: nameWatch, activity: activityWatch });
  };

  const onCancel = () => {
    props.onCancel && props.onCancel();
  };

  return (
    <>
      {errorMessage}
      <Form>
        <Form.Group controlId='name'>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type='input' placeholder='Ingrese nombre de la empresa' {...register('name')} defaultValue={props.company?.name} />
        </Form.Group>
        <Form.Group controlId='activity'>
          <Form.Label>Actividad</Form.Label>
          <Form.Control type='input' placeholder='Ingrese actividad de la empresa' {...register('activity')} defaultValue={props.company?.activity} />
        </Form.Group>
        <Row>
          <Col xs={6}>
            <Button variant={isFormFilled ? 'primary' : 'secondary'} onClick={onSave} disabled={!isFormFilled}>
              Guardar
            </Button>
          </Col>
          <Col xs={6}>
            <Button variant={'secondary'} onClick={onCancel}>
              Cancelar
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
