import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Александр Пономаренко</p>
        <table className='tbl'>
          <tr>
            <td>О себе:</td>
            <td>Frontend-разработчик React. <br />Проходил курс "Developer React.js OTUS" 4 года назад</td>
          </tr>
          <tr>
            <td>Технологии:</td>
            <td>Применяю React, TypeScript, Webpack, Redux, Jest, Storybook</td>
          </tr>
          <tr>
            <td>Цель обучения:</td>
            <td>актуализировать знания и навыки разработки на React, Next.js</td>
          </tr>
          <tr>
            <td>Telegram:</td>
            <td><a href="https://t.me/brain16383" target="tg">https://t.me/brain16383</a></td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
