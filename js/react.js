const App = () => {
    return (
      React.createElement('div', null,
        React.createElement('h1', null, 'Hola Mundo')
      )
    );
  }
  
  ReactDOM.render(
    React.createElement(App, null),
    document.getElementById('root')
  );
  