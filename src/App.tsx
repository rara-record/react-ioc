import { useState } from 'react'
import RenderPropPattern from "./renderingIOC/RenderPropPattern";
import CompoundComponentPattern from "./renderingIOC/CompoundComponentPattern";

function App() {
  return (
    <div className="App">
      <h1>렌더링 IOC</h1>
      <h2>Render Props 패턴</h2>
      <RenderPropPattern />

      <h2>Compound Component 패턴</h2>
      <CompoundComponentPattern />
    </div>
  )
}

export default App
