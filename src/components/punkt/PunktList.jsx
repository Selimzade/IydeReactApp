import { useState, useEffect } from "react";
import { getPunkts } from "./punktService";

const PunktList = () => {

  const [punkts, setPunkts] = useState([]);
    
  useEffect(() => {
    const fetchPunktsData = async () => {
      const punktsData = await getPunkts();
      setPunkts(punktsData);
    };

    fetchPunktsData();
  }, []);

  return (
    punkts.map(p => (<div key={p.id}>{p.name}</div>))
  )
}

export default PunktList