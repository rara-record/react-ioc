import React, {useState} from 'react';
import Card from "./Card";
import Accordion from "./Accordion";
import {AccordionHeader, AccordionPanel} from "./Accordion";


const CompoundComponentPattern = () => {
  const [value, setValue] = useState('');

  return (
  <>
    <Card>
      <Card.Content heading="컴포넌트 조합하기" text="오늘은 12월 14일 수요일"/>
      <Card.Input id="name" value={value} onChange={(e: any) => setValue(e.target.value)}/>
      <Card.Button />
    </Card>

    <Accordion>
      <AccordionHeader>header1</AccordionHeader>
      <AccordionPanel>하이</AccordionPanel>
    </Accordion>
  </>

  );
};

export default CompoundComponentPattern;