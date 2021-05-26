import React, {Fragment} from 'react';
// import background from '../../assets/Images/Background.jpg';
// import Fireplace from '../Fireplace';
import Documents from '../../components/Documents';
import Info from '../Info';
import { useServer } from '../../context'; 
import { Title, Div, Card } from './Styled';

const Home = () => {

  const { criminalRecord, eps, pensionAndCesantias, taxes, publicReceipts, dian } = useServer();

  return (
    <Fragment>
      <div>
        <Title>ANTECEDENTES</Title>
      </div>
      <Div>
        <Card>
          {criminalRecord.map(document => (
            <Documents key={document.id} name={document.name} video={document.video} linkVideo={document.linkVideo} linkDocument={document.linkDocument} />
          ))}
        </Card>
      </Div>
      <div>
        <Title>EPS</Title>
      </div>
      <Div>
        <Card>
          {eps.map(document => (
            <Documents key={document.id} name={document.name} video={document.video} linkVideo={document.linkVideo} linkDocument={document.linkDocument} />
          ))}
        </Card>
      </Div>
      <div>
        <Title>PENSIÓN Y CESANTÍAS</Title>
      </div>
      <Div>
        <Card>
          {pensionAndCesantias.map(document => (
            <Documents key={document.id} name={document.name} video={document.video} linkVideo={document.linkVideo} linkDocument={document.linkDocument} />
          ))}
        </Card>
      </Div>
      <div>
        <Title>IMPUESTOS</Title>
      </div>
      <Div>
        <Card>
          {taxes.map(document => (
            <Documents key={document.id} name={document.name} video={document.video} linkVideo={document.linkVideo} linkDocument={document.linkDocument} />
          ))}
        </Card>
      </Div>
      <div>
        <Title>COPIA RECIBOS PÚBLICOS</Title>
      </div>
      <Div>
        <Card>
          {publicReceipts.map(document => (
            <Documents key={document.id} name={document.name} video={document.video} linkVideo={document.linkVideo} linkDocument={document.linkDocument} />
          ))}
        </Card>
      </Div>
      <div>
        <Title>DIAN</Title>
      </div>
      <Div>
        <Card>
          {dian.map(document => (
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