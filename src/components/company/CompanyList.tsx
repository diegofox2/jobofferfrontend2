import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Company from '../../model/Company';

export interface CompanyListProps {
  companies: Array<Company>;

  onClick?: (id: string) => void;
}

export default function CompanyList(props: CompanyListProps) {
  const onClick = (event: any) => {
    props.onClick && props.onClick(event.currentTarget.id);
  };

  const items = props.companies.map((company: Company) => (
    <ListGroup.Item key={company.id} id={company.id} action as='li' role='listitem' onClick={onClick}>
      {company.name} | {company.activity}
    </ListGroup.Item>
  ));

  return <ListGroup role='list'>{items}</ListGroup>;
}
