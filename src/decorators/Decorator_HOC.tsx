import { defenitions } from '../data/defenitions';

export default function Decorator_HOC(Component, name) {
  return (props) => (
    <div className="container">
      <div>{defenitions[name]}</div>
      <br />
      <p>Example:</p>
      <div className="component-panel">
        <Component {...props} />
      </div>
      <div>
        <iframe
          className="sbwebcontainer"
          src={`https://stackblitz.com/edit/stack-react-guide?embed=1&file=examples%2FEx_${name}.tsx&hideExplorer=1&hideNavigation=1&view=editor&hidedevtools=1`}
        ></iframe>
      </div>
    </div>
  );
}
