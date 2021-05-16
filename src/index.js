import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let date =new Date();
date = date.getHours();
let greeting = '';
let cssStyle={};
if(date >= 1  && date < 12)
{
  greeting = 'Good Morning';
  cssStyle.color = 'green';
}
else if(date >=12 && date < 19 )
{
  greeting = 'Good Afternoon';
  cssStyle.color = 'Orange';
}
else
{
  greeting ='Good Night';
  cssStyle.color='Black';
}
ReactDOM.render(
  <>
  <div>
<h1>
Hello Guys <span style={cssStyle}> {greeting} </span>
</h1>
</div>
</>,
  document.getElementById('root')

);