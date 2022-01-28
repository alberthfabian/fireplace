// import React, { useEffect, useMemo } from 'react';
import React, { useMemo, useCallback, useState } from "react";
import { DataSocial } from "../components/DataSocial";
import { DataFireplace } from "../components/DataFireplace";
import { criminalRecord } from "../components/Data/CriminalRecord";
import { eps } from "../components/Data/Eps";
import { pensionAndCesantias } from "../components/Data/PensionAndCesantias";
import { taxes } from "../components/Data/Taxes";
import { publicReceipts } from "../components/Data/PublicReceipts";
import { dian } from "../components/Data/Dian";
import { police } from "../components/Data/Police";
import { sisben } from "../components/Data/Sisben";
import { codensa } from "../components/Data/Codensa";
import { runt } from "../components/Data/Runt";

const Server = React.createContext();

export function ServerProvider(props) {
  const [onlyFireplace, setOnlyFireplace] = useState([]);
  const [Open, setOpen] = useState(false);

  const ImgFire = useCallback((id) => {
    const fire = document.getElementById(id).id;
    setOpen(fire);
    const data = DataFireplace.filter((fire) => fire.id === parseInt(id));
    setOnlyFireplace(data[0]);
  }, []);

  const ModalClose = useCallback((e) => {
    setOpen(e);
  }, []);

  const value = useMemo(() => {
    return {
      onlyFireplace,
      Open,
      DataFireplace,
      DataSocial,
      ImgFire,
      ModalClose,
      criminalRecord,
      eps,
      pensionAndCesantias,
      taxes,
      publicReceipts,
      dian,
      police,
      sisben,
      runt,
      codensa,
    };
  }, [onlyFireplace, Open, ImgFire, ModalClose]);

  return <Server.Provider value={value} {...props} />;
}

export function useServer() {
  const context = React.useContext(Server);
  if (!context) {
    throw new Error("useServer debe estar dentro del proveedor Name");
  }
  return context;
}
