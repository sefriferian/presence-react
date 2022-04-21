import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Presence() {
  const dateTime = new Date();
  const time =
    dateTime.getHours() +
    ":" +
    dateTime.getMinutes() +
    ":" +
    dateTime.getSeconds();

  const dataArray = [
    {
      id: 1,
      nama: "sefri",
      kelas: "hunter",
      time: "12:12:12",
    },
    {
      id: 2,
      nama: "ferian",
      kelas: "hunter",
      time: "12:12:12",
    },
    {
      id: 3,
      nama: "erlangga",
      kelas: "dokter",
      time: "12:12:12",
    },
  ];

  const [datas, setDatas] = useState(dataArray);

  const handleButton = () => {
    setDatas((datas) => [
      ...datas,
      { id: 4, nama: "kurapika", kelas: "hunter", time: `${time}` },
    ]);
  };

  useEffect(() => console.log("Total Data: "), [datas.length]);

  console.log(datas);
  return (
    <div id="content">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Class</th>
            <th>Timein</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.nama}</td>
                <td>{data.kelas}</td>
                <td>{data.time}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <button onClick={handleButton}>Click</button>
      <p>Jumlah presensi {datas.length}</p>
    </div>
  );
}

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;
