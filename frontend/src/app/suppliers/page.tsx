"use client";
import { TopMenu } from "../../components/ui/TopMenu";
import { useEffect, useState } from "react";
import axios from "axios";

const getData = (page: number, limit: number = 10) => {
  const endPoint = "http://localhost:3001";
  return axios
    .get(`${endPoint}/api/suppliers`, {
      data: { page: page, limit: limit },
    })
    .then((response) => response.data);
};

const deleteSupplier = (id: string) => {
  const endPoint = "http://localhost:3001";
  return axios
    .delete(`${endPoint}/api/suppliers`, {
      params: { id },
    })
    .then((response) => response.data);
};

export default function Home() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  //const data = await getData(page);
  console.log({ data });
  useEffect(() => {
    getData(page).then((d) => {
      setData(d);
    });
  }, []);

  const nextPage = () => {
    setPage(page + 1);
    getData(page);
    getData(page).then((d) => {
      setData(d);
    });
  };

  const prevPage = () => {
    setPage(page - 1);
    getData(page);
    getData(page).then((d) => {
      setData(d);
    });
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <TopMenu></TopMenu>
      <div className="w-full flex flex-row items-start p-5">
        <div className="text-bold text-2xl">Administración de Proovedores</div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <table className="table-auto">
          <thead>
            <tr>
              <th>Acciones</th>
              <th>Id</th>
              <th>Nombre</th>
              <th>Razón Social</th>
              <th>Dirección</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d: any) => {
              return (
                <tr key={d.id}>
                  <td className="p-2">
                    <button
                      onClick={() => deleteSupplier(d.id)}
                      className="btn-warning"
                    >
                      Eliminar
                    </button>
                  </td>
                  <td className="p-2">{d.id}</td>
                  <td className="p-2">{d.name}</td>
                  <td className="p-2">{d.businessName}</td>
                  <td className="p-2">{d.address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="w-full flex justify-end items-end">
          <button onClick={() => nextPage()} className="mx-2 btn-primary">
            Anterior
          </button>
          <button onClick={() => prevPage()} className="mx-2 btn-primary">
            Siguiente
          </button>
        </div>
      </div>
    </main>
  );
}
