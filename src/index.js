import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode> 
);

//ReactDOM.render(<h1>Cao svima</h1>,document.getElementById("root"));

//KORISTIMO JSX za pisanje, a ne HTML

// const prom = <h1>Cao svima!</h1>;


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <div>
//     {prom}
//   </div>>
//    // ovo je fragment i on je prazan
//   //ovo je jss kod a ne html
  
//   // ne mozemo da imamo vise od jednog elemtna koji prosledjujemo
//   // jedan nacin je da sve stavimo u jedan div
// );



