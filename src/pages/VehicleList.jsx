import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const initialVehicles = [
  { id: 1, brand: 'Toyota', model: 'Corolla', plate: '34ABC123', status: 'Available' },
  { id: 2, brand: 'Ford', model: 'Focus', plate: '34XYZ789', status: 'Reserved' },
];

export default function VehicleList() {
  const [vehicles, setVehicles] = useState(initialVehicles);
  const [showForm, setShowForm] = useState(false);
  const [newVehicle, setNewVehicle] = useState({ brand: '', model: '', plate: '', status: 'Available' });

  const handleAddVehicle = () => {
    const updatedVehicles = [...vehicles, { id: Date.now(), ...newVehicle }];
    setVehicles(updatedVehicles);
    setNewVehicle({ brand: '', model: '', plate: '', status: 'Available' });
    setShowForm(false);
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Vehicle List</h1>
      <Button className="bg-blue-600 text-white" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Add New Vehicle'}
      </Button>

      {showForm && (
        <div className="bg-gray-100 p-4 rounded-md space-y-2">
          <input
            type="text"
            placeholder="Brand"
            className="w-full p-2 border rounded"
            value={newVehicle.brand}
            onChange={(e) => setNewVehicle({ ...newVehicle, brand: e.target.value })}
          />
          <input
            type="text"
            placeholder="Model"
            className="w-full p-2 border rounded"
            value={newVehicle.model}
            onChange={(e) => setNewVehicle({ ...newVehicle, model: e.target.value })}
          />
          <input
            type="text"
            placeholder="Plate Number"
            className="w-full p-2 border rounded"
            value={newVehicle.plate}
            onChange={(e) => setNewVehicle({ ...newVehicle, plate: e.target.value })}
          />
          <select
            className="w-full p-2 border rounded"
            value={newVehicle.status}
            onChange={(e) => setNewVehicle({ ...newVehicle, status: e.target.value })}
          >
            <option value="Available">Available</option>
            <option value="Reserved">Reserved</option>
            <option value="In Maintenance">In Maintenance</option>
          </select>
          <Button className="bg-green-600 text-white" onClick={handleAddVehicle}>Save</Button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {vehicles.map((vehicle) => (
          <Card key={vehicle.id}>
            <CardContent className="p-4">
              <div className="text-lg font-semibold">{vehicle.brand} {vehicle.model}</div>
              <div className="text-sm text-gray-600">Plate Number: {vehicle.plate}</div>
              <div className="text-sm mt-2">Status: <span className="font-bold">{vehicle.status}</span></div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
