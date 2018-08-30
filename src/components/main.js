import React from 'react';
import Container from './Container';

const Main = (props) => {
	console.log("process ", process.env)
  
    return (
      <div className="Main">
        <Container />
      </div>
    );
}

export default Main;