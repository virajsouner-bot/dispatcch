"use client";

import { useState } from "react";

export default function VehiclesPage() {
  const [vehicles, setVehicles] = useState([
    {
      number: "DL 01 AB 4521",
      model: "Tata 407",
      type: "Truck",
      driver: "Arjun Mehta",
    },
    {
      number: "HR 26 CD 7821",
      model: "Mahindra Bolero",
      type: "Pickup",
      driver: "Rahul Sharma",
    },
  ]);

  const [number, setNumber] = useState("");
  const [model, setModel] = useState("");
  const [type, setType] = useState("");
  const [driver, setDriver] = useState("");

  function addVehicle() {
    if (!number || !model) {
      alert("Please enter vehicle number and model");
      return;
    }

    setVehicles([
      ...vehicles,
      {
        number,
        model,
        type,
        driver,
      },
    ]);

    setNumber("");
    setModel("");
    setType("");
    setDriver("");
  }

  function deleteVehicle(index: number) {
    setVehicles(vehicles.filter((_, i) => i !== index));
  }

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">

      <h1 className="text-3xl font-bold">Vehicles</h1>

      <p className="mt-2 text-slate-400">
        Manage your logistics fleet
      </p>

      {/* Add Vehicle */}
      <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">

        <h2 className="mb-5 text-xl font-semibold">
          Add Vehicle
        </h2>

        <div className="grid gap-4 md:grid-cols-2">

          <input
            placeholder="Vehicle Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="rounded-xl bg-slate-950 p-3 outline-none"
          />

          <input
            placeholder="Vehicle Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="rounded-xl bg-slate-950 p-3 outline-none"
          />

          <input
            placeholder="Vehicle Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="rounded-xl bg-slate-950 p-3 outline-none"
          />

          <input
            placeholder="Driver Name"
            value={driver}
            onChange={(e) => setDriver(e.target.value)}
            className="rounded-xl bg-slate-950 p-3 outline-none"
          />

        </div>

        <button
          onClick={addVehicle}
          className="mt-5 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black"
        >
          + Add Vehicle
        </button>

      </div>

      {/* Vehicles */}
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

        {vehicles.map((vehicle, index) => (

          <div
            key={index}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >

            <h2 className="text-xl font-semibold">
              {vehicle.number}
            </h2>

            <p className="mt-3 text-slate-400">
              Model: {vehicle.model}
            </p>

            <p className="text-slate-400">
              Type: {vehicle.type}
            </p>

            <p className="text-slate-400">
              Driver: {vehicle.driver || "Not assigned"}
            </p>

            <button
              onClick={() => deleteVehicle(index)}
              className="mt-5 rounded-xl border border-red-500/30 px-4 py-2 text-red-400"
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </main>
  );
}