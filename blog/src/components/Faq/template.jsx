import React from 'react';
import { Accordion } from 'react-bootstrap';



export function Question({eventKey,title,children}){
	return (
	 <Accordion.Item eventKey={eventKey}>
		<Accordion.Header>{title}</Accordion.Header>
		<Accordion.Body>
			{children}
		</Accordion.Body>
	</Accordion.Item>
	)
}