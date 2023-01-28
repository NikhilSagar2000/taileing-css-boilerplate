function App() {
  return (
    <div className="p-4">
      <div>
        <p className="text-primary-500">Primary text</p>
        <p className="text-secondary-500">Secondary text</p>
        <p className="text-tertiary-500">Tertiary text</p>
      </div>
      <div>
        <h1>Heading1</h1>
        <h2>Heading2</h2>
        <h3>Heading3</h3>
        <h4>Heading4</h4>
        <h5>Heading5</h5>
        <h6>Heading6</h6>
        <p>Paragraph</p>
        <strong>Strong</strong>
        &nbsp;
        <b>Bold</b>
        &nbsp;
        <span>Span</span>
        <span>.</span>
      </div>
      <div className="flex my-4 gap-4  items-center ">
        <button className="btn-primary-small">Primary Button</button>
        <button className="btn-primary">Primary Button</button>
        <button className="btn-primary-large">Primary Button</button>
      </div>
      <div className="flex gap-4  my-4 items-center ">
        <button className="btn-secondary-small">Secondary Button</button>
        <button className="btn-secondary">Secondary Button</button>
        <button className="btn-secondary-large">Secondary Button</button>
      </div>
      <div className="flex gap-4  my-4 items-center ">
        <button className="btn-tertiary-small">Tertiary Button</button>
        <button className="btn-tertiary">Tertiary Button</button>
        <button className="btn-tertiary-large">Tertiary Button</button>
      </div>
    </div>
  );
}

export default App;
