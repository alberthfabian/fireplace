import React, {Fragment} from 'react';
// import background from '../../assets/Images/Background.jpg';
// import Fireplace from '../Fireplace';
import Documents from '../../components/Documents';
import Info from '../Info';
import { useServer } from '../../context'; 
import { Title, Div, Card } from './Styled';

const Home = () => {

  const { dataDocuments } = useServer();

  return (
    <Fragment>
      <div>
        <Title>DOCUMENTOS PARA DESCARGAR</Title>
      </div>
      <Div>
        <Card>
          {dataDocuments.map(document => (
            <Documents key={document.id} name={document.name} video={document.video} linkVideo={document.linkVideo} linkDocument={document.linkDocument} />
          ))}
        </Card>
      </Div>
      {/* <Div id='Home'>
        <Mountains src={ background } alt='Mountains'/>
        <Data>
          <Name>¡Venta de Chimeneas!</Name>
          <Design>Diseños exlusivos</Design>
        </Data>
      </Div>
      <Fireplace/> */}
      <Info/>
    </Fragment>
  );
};

export default Home;