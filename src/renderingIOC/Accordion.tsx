import React, {Context, createContext, useContext, useMemo, useState} from 'react';
import styled from '@emotion/styled'


const AccordionContext:Context<{
  openItem: string;
  setOpenItem: any;
}> = createContext({ openItem: '', setOpenItem: null });

const Accordion = ({children}: {children: React.ReactNode}) => {
  const [openItem, setOpenItem] = useState('');
  const value = useMemo(() => ({openItem, setOpenItem}), [openItem]);

  return (
    <AccordionContainer>
      <AccordionContext.Provider value={value}>
        {children}
      </AccordionContext.Provider>
    </AccordionContainer>

  );
};

export const AccordionHeader = ({ id, children }: any) => {
  const { setOpenItem } = useContext(AccordionContext)
  return (
    <AccordionHeaderContainer onClick={() => setOpenItem(id)}>
      {children}
    </AccordionHeaderContainer>
  )
}

export const AccordionPanel = ({ id, children }: any) => {
  const { openItem } = useContext(AccordionContext)
  return (
    <AccordionPanelContainer
      padding={openItem === id ? "16px" : "0px"}
      height={openItem === id ? "fit-content" : "2px"} >
      {children}
    </AccordionPanelContainer>
  )
}

const AccordionContainer = styled.div`
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  padding: 8px;
`;

const AccordionHeaderContainer = styled.div`
  padding: 8px 16px;
  background: #f5f5f5;
  border-top: 1px solid #d3d3d3;
  cursor: pointer;
`;

const AccordionPanelContainer = styled.div<{ height: string; padding: string }>`
  padding: ${({ padding }: { padding: string }) => padding};
  height: ${({ height }: { height: string }) => height};
  overflow: hidden;
  border-bottom: 1px solid #d3d3d3;
`;


export default Accordion;
