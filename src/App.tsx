function App() {
  return (
    <div>
      <p className="text-primary-500">Primary text</p>
      <p className="text-secondary-500">Secondary text</p>
      <p className="text-tertiary-500">Tertiary text</p>
      <div className="flex gap-4 p-4 items-center ">
        <button className="btn-primary-small">Primary Button</button>
        <button className="btn-primary">Primary Button</button>
        <button className="btn-primary-large">Primary Button</button>
      </div>
      <div className="flex gap-4 p-4 items-center ">
        <button className="btn-secondary-small">Secondary Button</button>
        <button className="btn-secondary">Secondary Button</button>
        <button className="btn-secondary-large">Secondary Button</button>
      </div>
      <div className="flex gap-4 p-4 items-center ">
        <button className="btn-tertiary-small">Tertiary Button</button>
        <button className="btn-tertiary">Tertiary Button</button>
        <button className="btn-tertiary-large">Tertiary Button</button>
      </div>
    </div>
  );
}

export default App;
