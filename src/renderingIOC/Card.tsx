import React from 'react';

type TChildren = {
  children: React.ReactNode
}

const Card = ({ children }: {children: React.ReactNode}) => {
  return (
    <div>
      {children}
    </div>
  );
};

const Heading = ({ children }: TChildren) => {
  return <h1>{children}</h1>
}
Card.Heading = Heading
const Text = ({ children }: TChildren) => {
  return <p>{children}</p>
}
Card.Text = Text

type TContent = {
  heading: string;
  text: string;
}

const Content = ({ heading, text }: TContent) => {
  return (
    <>
      <Card.Heading>
        {heading}
      </Card.Heading>
      <Card.Text>
        {text}
      </Card.Text>
    </>
  )
}
Card.Content = Content
const Input = ({ id, value, type = 'text', onChange, }: any) => {
  return <Input id={id} value={value ?? ''} type={type} onChange={onChange} />
}

Card.Input = Input

const Button = ({ type = 'button', onClick, children }: any) => {
  return <button type={type} onClick={onClick} >{children}</button>
}

Card.Button = Button

export default Card;