"use client";

import { useState } from "react";

export default function DriversPage() {
  const [drivers, setDrivers] = useState([
    {
      name: "Arjun Mehta",
      phone: "9876543210",
      license: "DL123456",
      vehicle: "DL 01 AB 4521",
    },
    {
      name: "Rahul Sharma",
      phone: "9876501234",
      license: "DL789012",
      vehicle: "HR 26 CD 7821",
    },
  ]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [license, setLicense] = useState("");
  const [vehicle, setVehicle] = useState("");

  function addDriver() {
    if (!name || !phone) {
      alert("Please enter driver name and phone");
      return;
    }

    setDrivers([
      ...drivers,
      {
        name,
        phone,
        license,
        vehicle,
      },
    ]);

    setName("");
    setPhone("");
    setLicense("");
    setVehicle("");
  }

  function deleteDriver(index: number) {
    setDrivers(drivers.filter((_, i) => i !== index));
  }

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">

      <h1 className="text-3xl font-bold">
        Drivers
      </h1>

      <p className="mt-2 text-slate-400">
        Manage your delivery drivers
      </p>

      <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">

        <h2 className="mb-5 text-xl font-semibold">
          Add Driver
        </h2>

        <div className="grid gap-4 md:grid-cols-2">

          <input
            placeholder="Driver Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-xl bg-slate-950 p-3 outline-none"
          />

          <input
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-xl bg-slate-950 p-3 outline-none"
          />

          <input
            placeholder="Driving License"
            value={license}
            onChange={(e) => setLicense(e.target.value)}
            className="rounded-xl bg-slate-950 p-3 outline-none"
          />

          <input
            placeholder="Vehicle Number"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            className="rounded-xl bg-slate-950 p-3 outline-none"
          />

        </div>

        <button
          onClick={addDriver}
          className="mt-5 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black"
        >
          + Add Driver
        </button>

      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

        {drivers.map((driver, index) => (

          <div
            key={index}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >

            <h2 className="text-xl font-semibold">
              {driver.name}
            </h2>

            <p className="mt-3 text-slate-400">
              Phone: {driver.phone}
            </p>

            <p className="text-slate-400">
              License: {driver.license}
            </p>

            <p className="text-slate-400">
              Vehicle: {driver.vehicle || "Not assigned"}
            </p>

            <button
              onClick={() => deleteDriver(index)}
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