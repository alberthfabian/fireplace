import React, {Fragment} from 'react';
import background from '../../assets/Images/Background.jpg';
import { Mountains, Div, Name, Design, Data } from './Styled';

const Home = () => {
  return (
    <Fragment>
      <Div id='Home'>
        <Mountains src={ background } alt='Mountains'/>
        <Data>
          <Name>¡Venta de Chimeneas!</Name>
          <Design>Diseños exlusivos</Design>
        </Data>
      </Div>
    </Fragment>
  );
};

export default Home;