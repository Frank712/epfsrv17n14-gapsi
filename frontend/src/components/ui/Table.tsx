import React from "react";

export const Table = (data: Array<any>) => {
  return (
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
                  <button className="btn-warning">Eliminar</button>
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
    </div>
  );
};
