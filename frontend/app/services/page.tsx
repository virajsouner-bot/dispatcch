"use client";

import { useState } from "react";

export default function ServicesPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [delivery, setDelivery] = useState("");
  const [vehicles, setVehicles] = useState("");

  const [services, setServices] = useState([
    {
      name: "Standard Delivery",
      description: "Normal delivery service",
      price: "₹500",
      delivery: "2-3 Days",
      vehicles: "Van",
    },
    {
      name: "Express Delivery",
      description: "Fast priority delivery",
      price: "₹900",
      delivery: "Same Day",
      vehicles: "Pickup",
    },
  ]);

  function addService() {
    if (name === "") {
      alert("Please enter service name");
      return;
    }

    const newService = {
      name: name,
      description: description,
      price: price,
      delivery: delivery,
      vehicles: vehicles,
    };

    setServices([...services, newService]);

    setName("");
    setDescription("");
    setPrice("");
    setDelivery("");
    setVehicles("");
  }

  function deleteService(index: number) {
    const updatedServices = services.filter(
      (_, i) => i !== index
    );

    setServices(updatedServices);
  }

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Services
        </h1>

        <p className="mt-2 text-slate-400">
          Manage your logistics services
        </p>
      </div>

      {/* Add Service */}
      <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
        
        <h2 className="mb-5 text-xl font-semibold">
          Add New Service
        </h2>

        <div className="grid gap-4 md:grid-cols-2">

          <input
            type="text"
            placeholder="Service Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-xl border border-slate-700 bg-slate-950 p-3 text-white outline-none"
          />

          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            className="rounded-xl border border-slate-700 bg-slate-950 p-3 text-white outline-none"
          />

          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="rounded-xl border border-slate-700 bg-slate-950 p-3 text-white outline-none"
          />

          <input
            type="text"
            placeholder="Delivery Time"
            value={delivery}
            onChange={(e) =>
              setDelivery(e.target.value)
            }
            className="rounded-xl border border-slate-700 bg-slate-950 p-3 text-white outline-none"
          />

          <input
            type="text"
            placeholder="Vehicle Type"
            value={vehicles}
            onChange={(e) =>
              setVehicles(e.target.value)
            }
            className="rounded-xl border border-slate-700 bg-slate-950 p-3 text-white outline-none"
          />

        </div>

        <button
          onClick={addService}
          className="mt-5 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
        >
          + Add Service
        </button>
      </div>

      {/* Services */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <div className="mb-4 flex items-center justify-between">

              <h2 className="text-xl font-semibold">
                {service.name}
              </h2>

              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-400">
                Active
              </span>

            </div>

            <p className="mb-4 text-sm text-slate-400">
              {service.description}
            </p>

            <div className="space-y-2 text-sm">

              <p>
                <span className="text-slate-500">
                  Price:
                </span>{" "}
                {service.price}
              </p>

              <p>
                <span className="text-slate-500">
                  Delivery:
                </span>{" "}
                {service.delivery}
              </p>

              <p>
                <span className="text-slate-500">
                  Vehicle:
                </span>{" "}
                {service.vehicles}
              </p>

            </div>

            <button
              onClick={() => deleteService(index)}
              className="mt-5 w-full rounded-xl border border-red-500/30 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10"
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </main>
  );
}