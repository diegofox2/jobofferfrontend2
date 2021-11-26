import React from 'react';
import { Accordion, Card, Form } from 'react-bootstrap';

export interface FilterItemValue {
  id: string;
  value: string;
  checked: boolean;
}

export interface FilterItemProps {
  title: string;
  values: Array<FilterItemValue>;
  onSelectedValues: (values: Array<FilterItemValue>) => {};
}

export default function FilterItem(props: FilterItemProps) {
  const [selectedItems, setSelectedItems] = React.useState<Array<FilterItemValue>>(props.values.filter((item) => item.checked));
  const [anyItemChanged, setAnyItemChanged] = React.useState<boolean>(false);

  const onChange = (event: any) => {
    setAnyItemChanged(true);

    const clickedItem = props.values.find((item) => item.id === event.currentTarget.id)!;

    if (selectedItems.some((x) => x.id === clickedItem.id)) {
      clickedItem.checked = false;
      setSelectedItems(selectedItems.filter((item) => item.id !== clickedItem.id));
    } else {
      clickedItem.checked = true;
      setSelectedItems([...selectedItems, clickedItem]);
    }
  };

  anyItemChanged && props.onSelectedValues && props.onSelectedValues(selectedItems);

  const items = props.values.map((item) => (
    <Form.Group key={item.id}>
      <Form.Check type={'checkbox'} role='listitem' defaultChecked={item.checked} id={item.id} label={item.value} onChange={onChange} />
    </Form.Group>
  ));

  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={props.title}>
          {props.title}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={props.title}>
          <Card.Body>{items}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
