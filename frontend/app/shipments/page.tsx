"use client";

import { useState } from "react";
import {
  Plus,
  Search,
  Trash2,
  Package,
  MapPin,
  User,
  X,
  Truck,
} from "lucide-react";

type Shipment = {
  id: string;
  customer: string;
  destination: string;
  origin: string;
  driver: string;
  vehicle: string;
  status: string;
  priority: string;
};

const initialShipments: Shipment[] = [
  {
    id: "DSP-10482",
    customer: "Amazon Logistics",
    destination: "New Delhi",
    origin: "Gurugram",
    driver: "Arjun Mehta",
    vehicle: "DL 01 AB 4521",
    status: "In Transit",
    priority: "High",
  },
  {
    id: "DSP-10481",
    customer: "Flipkart",
    destination: "Jaipur",
    origin: "New Delhi",
    driver: "Rahul Singh",
    vehicle: "RJ 14 CA 9211",
    status: "Out for Delivery",
    priority: "Medium",
  },
  {
    id: "DSP-10480",
    customer: "Reliance Retail",
    destination: "Gurugram",
    origin: "Noida",
    driver: "Vikas Kumar",
    vehicle: "HR 26 DK 4412",
    status: "Delivered",
    priority: "Low",
  },
  {
    id: "DSP-10479",
    customer: "Tata Motors",
    destination: "Noida",
    origin: "Faridabad",
    driver: "Aman Verma",
    vehicle: "UP 16 BT 7821",
    status: "Delayed",
    priority: "High",
  },
];

export default function ShipmentsPage() {
  const [shipments, setShipments] =
    useState<Shipment[]>(initialShipments);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);

  const [newShipment, setNewShipment] = useState({
    customer: "",
    origin: "",
    destination: "",
    driver: "",
    vehicle: "",
    priority: "Medium",
  });

  const filteredShipments = shipments.filter((shipment) => {
    const matchesSearch =
      shipment.id.toLowerCase().includes(search.toLowerCase()) ||
      shipment.customer.toLowerCase().includes(search.toLowerCase()) ||
      shipment.destination.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || shipment.status === filter;

    return matchesSearch && matchesFilter;
  });

  function addShipment() {
    if (
      !newShipment.customer ||
      !newShipment.origin ||
      !newShipment.destination
    ) {
      alert("Please fill customer, origin and destination.");
      return;
    }

    const shipment: Shipment = {
      id: `DSP-${10500 + shipments.length}`,
      customer: newShipment.customer,
      origin: newShipment.origin,
      destination: newShipment.destination,
      driver: newShipment.driver || "Unassigned",
      vehicle: newShipment.vehicle || "Unassigned",
      status: "Pending",
      priority: newShipment.priority,
    };

    setShipments([shipment, ...shipments]);

    setNewShipment({
      customer: "",
      origin: "",
      destination: "",
      driver: "",
      vehicle: "",
      priority: "Medium",
    });

    setShowModal(false);
  }

  function deleteShipment(id: string) {
    setShipments(
      shipments.filter((shipment) => shipment.id !== id)
    );
  }

  return (
    <main className="min-h-screen bg-[#070b14] text-white">

      {/* Header */}

      <header className="border-b border-white/10 bg-[#0a0f1c]">
        <div className="flex items-center justify-between px-6 py-6 lg:px-10">

          <div>
            <h1 className="text-2xl font-bold">
              Shipments
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage and monitor your shipments
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-black hover:bg-cyan-300"
          >
            <Plus size={18} />
            New Shipment
          </button>

        </div>
      </header>

      <div className="p-6 lg:p-10">

        {/* Stats */}

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <Stat
            title="Total Shipments"
            value={shipments.length.toString()}
            icon={<Package size={20} />}
          />

          <Stat
            title="In Transit"
            value={
              shipments.filter(
                (x) => x.status === "In Transit"
              ).length.toString()
            }
            icon={<Truck size={20} />}
          />

          <Stat
            title="Delivered"
            value={
              shipments.filter(
                (x) => x.status === "Delivered"
              ).length.toString()
            }
            icon={<Package size={20} />}
          />

          <Stat
            title="Delayed"
            value={
              shipments.filter(
                (x) => x.status === "Delayed"
              ).length.toString()
            }
            icon={<MapPin size={20} />}
          />

        </div>

        {/* Search / Filters */}

        <div className="mb-5 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 lg:flex-row">

          <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4">

            <Search
              size={18}
              className="text-gray-500"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search shipment, customer or destination..."
              className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-gray-600"
            />

          </div>

          <select
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value)
            }
            className="rounded-xl border border-white/10 bg-[#0d1422] px-4 py-3 text-sm outline-none"
          >
            <option>All</option>
            <option>Pending</option>
            <option>In Transit</option>
            <option>Out for Delivery</option>
            <option>Delivered</option>
            <option>Delayed</option>
          </select>

        </div>

        {/* Shipment Table */}

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[1000px]">

              <thead className="border-b border-white/10 bg-white/[0.02]">

                <tr className="text-left text-xs text-gray-500">

                  <th className="px-6 py-4">
                    SHIPMENT
                  </th>

                  <th className="px-6 py-4">
                    CUSTOMER
                  </th>

                  <th className="px-6 py-4">
                    ROUTE
                  </th>

                  <th className="px-6 py-4">
                    DRIVER
                  </th>

                  <th className="px-6 py-4">
                    STATUS
                  </th>

                  <th className="px-6 py-4">
                    PRIORITY
                  </th>

                  <th className="px-6 py-4">
                    ACTION
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredShipments.map((shipment) => (

                  <tr
                    key={shipment.id}
                    className="border-b border-white/5 hover:bg-white/[0.03]"
                  >

                    <td className="px-6 py-5">

                      <p className="font-medium text-cyan-400">
                        {shipment.id}
                      </p>

                      <p className="mt-1 text-xs text-gray-600">
                        {shipment.vehicle}
                      </p>

                    </td>

                    <td className="px-6 py-5 text-sm">
                      {shipment.customer}
                    </td>

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-2 text-sm">

                        <span>
                          {shipment.origin}
                        </span>

                        <span className="text-gray-600">
                          →
                        </span>

                        <span>
                          {shipment.destination}
                        </span>

                      </div>

                    </td>

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-2 text-sm text-gray-400">

                        <User size={15} />

                        {shipment.driver}

                      </div>

                    </td>

                    <td className="px-6 py-5">

                      <Status status={shipment.status} />

                    </td>

                    <td className="px-6 py-5">

                      <Priority
                        priority={shipment.priority}
                      />

                    </td>

                    <td className="px-6 py-5">

                      <button
                        onClick={() =>
                          deleteShipment(shipment.id)
                        }
                        className="rounded-lg p-2 text-gray-500 hover:bg-red-400/10 hover:text-red-400"
                      >
                        <Trash2 size={17} />
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {filteredShipments.length === 0 && (

            <div className="py-20 text-center">

              <Package
                size={40}
                className="mx-auto text-gray-700"
              />

              <p className="mt-4 text-gray-500">
                No shipments found
              </p>

            </div>

          )}

        </div>

      </div>

      {/* Add Shipment Modal */}

      {showModal && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">

          <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-[#0b111e] p-6 shadow-2xl">

            <div className="mb-6 flex items-center justify-between">

              <div>

                <h2 className="text-xl font-semibold">
                  Create Shipment
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  Add a new shipment to your network
                </p>

              </div>

              <button
                onClick={() =>
                  setShowModal(false)
                }
                className="rounded-lg p-2 text-gray-500 hover:bg-white/5 hover:text-white"
              >
                <X size={20} />
              </button>

            </div>

            <div className="space-y-4">

              <Input
                label="Customer"
                placeholder="e.g. Amazon Logistics"
                value={newShipment.customer}
                onChange={(value) =>
                  setNewShipment({
                    ...newShipment,
                    customer: value,
                  })
                }
              />

              <div className="grid gap-4 sm:grid-cols-2">

                <Input
                  label="Origin"
                  placeholder="e.g. Gurugram"
                  value={newShipment.origin}
                  onChange={(value) =>
                    setNewShipment({
                      ...newShipment,
                      origin: value,
                    })
                  }
                />

                <Input
                  label="Destination"
                  placeholder="e.g. Jaipur"
                  value={newShipment.destination}
                  onChange={(value) =>
                    setNewShipment({
                      ...newShipment,
                      destination: value,
                    })
                  }
                />

              </div>

              <Input
                label="Driver"
                placeholder="e.g. Arjun Mehta"
                value={newShipment.driver}
                onChange={(value) =>
                  setNewShipment({
                    ...newShipment,
                    driver: value,
                  })
                }
              />

              <Input
                label="Vehicle"
                placeholder="e.g. DL 01 AB 4521"
                value={newShipment.vehicle}
                onChange={(value) =>
                  setNewShipment({
                    ...newShipment,
                    vehicle: value,
                  })
                }
              />

              <div>

                <label className="mb-2 block text-xs text-gray-500">
                  Priority
                </label>

                <select
                  value={newShipment.priority}
                  onChange={(e) =>
                    setNewShipment({
                      ...newShipment,
                      priority: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none"
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>

              </div>

              <button
                onClick={addShipment}
                className="mt-3 w-full rounded-xl bg-cyan-400 py-3 font-semibold text-black hover:bg-cyan-300"
              >
                Create Shipment
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}


/* ---------------- COMPONENTS ---------------- */

function Stat({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
        {icon}
      </div>

      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h3 className="mt-1 text-3xl font-bold">
        {value}
      </h3>

    </div>
  );
}


function Status({
  status,
}: {
  status: string;
}) {
  const styles: Record<string, string> = {
    Pending:
      "bg-yellow-400/10 text-yellow-400",

    "In Transit":
      "bg-blue-400/10 text-blue-400",

    "Out for Delivery":
      "bg-purple-400/10 text-purple-400",

    Delivered:
      "bg-emerald-400/10 text-emerald-400",

    Delayed:
      "bg-red-400/10 text-red-400",
  };

  return (
    <span
      className={`rounded-full px-3 py-1.5 text-xs ${
        styles[status] ||
        "bg-white/10 text-gray-400"
      }`}
    >
      {status}
    </span>
  );
}


function Priority({
  priority,
}: {
  priority: string;
}) {
  const styles: Record<string, string> = {
    High: "text-red-400",
    Medium: "text-yellow-400",
    Low: "text-emerald-400",
  };

  return (
    <span
      className={`text-xs font-medium ${
        styles[priority]
      }`}
    >
      ● {priority}
    </span>
  );
}


function Input({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>

      <label className="mb-2 block text-xs text-gray-500">
        {label}
      </label>

      <input
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none transition placeholder:text-gray-700 focus:border-cyan-400/50"
      />

    </div>
  );
}