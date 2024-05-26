"use client";
import { TopMenu } from "../../components/ui/TopMenu";
import { useEffect, useState } from "react";
import axios from "axios";

const LIMIT = 10;

const getData = (page: number, limit: number = 10) => {
  console.log({ page });
  const endPoint = "http://localhost:3333";
  return axios
    .get(`${endPoint}/api/suppliers`, {
      params: { page: page, limit: limit },
      data: { page: page, limit: limit },
    })
    .then((response) => response.data);
};

export default function Home() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [disableNext, setDisableNext] = useState(false);
  const [showForm, setShowForm] = useState(false);
  //const data = await getData(page);
  console.log({ data });
  useEffect(() => {
    getData(page).then((d) => {
      setData(d);
    });
  }, []);

  const nextPage = () => {
    console.log(page);
    getData(page).then((d) => {
      if (d.length < LIMIT) {
        setDisableNext(true);
        setData(d);
        return;
      }
      setData(d);
      setPage(page + 1);
    });
  };

  const prevPage = () => {
    if (page === 1) {
      return;
    }
    console.log(page);
    getData(page).then((d) => {
      setData(d);
      setPage(page - 1);
    });
  };

  const deleteSupplier = (id: string) => {
    const endPoint = "http://localhost:3333";
    return axios
      .delete(`${endPoint}/api/suppliers`, {
        params: { id },
      })
      .then((response) => {
        getData(page).then((d) => {
          setData(d);
        });
      });
  };

  const createSupplier = () => {
    setShowForm(true);
  };

  const cancel = () => {
    setShowForm(false);
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <TopMenu></TopMenu>
      <div className="flex flex-row items-start p-5">
        <div className="text-bold text-2xl">Administración de Proovedores</div>
        {showForm && <SupplierForm cancelCallback={() => {}}></SupplierForm>}
      </div>
      <div className="flex flex-col items-center justify-center">
        <div>
          <button className="mx-2 btn-primary">Agregar Proovedor</button>
        </div>
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
          <button onClick={() => prevPage()} className="mx-2 btn-primary">
            Anterior
          </button>
          <button
            disabled={disableNext}
            onClick={() => nextPage()}
            className="mx-2 btn-primary"
          >
            Siguiente
          </button>
        </div>
      </div>
    </main>
  );
}

const SupplierForm = (cancelCallback: any) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Agregar proovedor
                  </h3>
                  <div className="mt-2"></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Agregar
              </button>
              <button
                type="button"
                onClick={() => cancelCallback}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
