import React, { useState } from 'react';

const initialVehicles = [
  { id: 1, brand: 'Toyota', model: 'Corolla', plate: '34ABC123', status: 'Boş' },
  { id: 2, brand: 'Ford', model: 'Focus', plate: '34XYZ789', status: 'Rezerve' },
];

export default function VehicleList() {
  const [vehicles, setVehicles] = useState(initialVehicles);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Araç Listesi</h1>
      <button>Yeni Araç Ekle</button>
      <div>
        {vehicles.map(vehicle => (
          <div key={vehicle.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <div><strong>{vehicle.brand} {vehicle.model}</strong></div>
            <div>Plaka: {vehicle.plate}</div>
            <div>Durum: {vehicle.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}