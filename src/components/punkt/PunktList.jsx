import { useState, useEffect } from "react";
import { getPunkts } from "./punktService";
import { Table } from "antd";

const PunktList = () => {

  const columns = [
    {
      title: 'Ad',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Bal',
      dataIndex: 'point',
      key: 'point',
    }
  ];

  const [punkts, setPunkts] = useState([]);
    
  useEffect(() => {
    const fetchPunktsData = async () => {
      const punktsData = await getPunkts();
      setPunkts(punktsData);
    };

    fetchPunktsData();
  }, []);

  return (
    <Table columns={columns} dataSource={punkts} />
  )
}

export default PunktList