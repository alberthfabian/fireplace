import React from 'react';
import Map from '../../components/Map'
import { Div, Article, H2, Data } from './Styled';

const Info = () => {
  
  return ( 
    <Div>
      <Data>
        <H2>Domicilios para la ciudad de Bogotá</H2>
        <p>Dirección 1: Diagonal 45A Sur # 13J - 34</p>
        <p>Dirección 2: Diagonal 45F Sur # 13F - 46</p>
        <p>Celular: 3124563067 - 3228107821</p>
        <br/>
        <h3>Chimenea Naranja: $ 90.000 </h3>
        <h3>Chimenea Blanca: $ 100.000 </h3>
        <br/>
        <h2>Contiene:</h2>
        <p>4 Botas navideñas impresas en cartulina</p>
        <p>1 Guirnalda</p>
        <p>2 Troncos en icopor</p>
        <p>1 Juego de luces navideñas</p>
        <p>1 Pliego de papel crepé</p>
        <br/>
        <h2>Características:</h2>
        <p>Material: icopor</p>
        <p>Ancho: 90cm</p>
        <p>Altura: 86cm</p>
        <p>Fondo: 20cm</p>
      </Data>
      <Article>
        <Map/>
      </Article>
    </Div>
  )
};

export default Info;