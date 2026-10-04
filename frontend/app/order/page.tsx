"use client";

import { useState } from "react";
import {
  Plus,
  Search,
  Trash2,
  ShoppingCart,
  Clock,
  CheckCircle,
  AlertTriangle,
  X,
  MapPin,
  Package,
} from "lucide-react";

type Order = {
  id: string;
  customer: string;
  phone: string;
  pickup: string;
  delivery: string;
  items: number;
  value: number;
  status: string;
  priority: string;
  shipment: string;
};

const initialOrders: Order[] = [
  {
    id: "ORD-20482",
    customer: "Amazon India",
    phone: "+91 9876543210",
    pickup: "Gurugram",
    delivery: "New Delhi",
    items: 4,
    value: 12500,
    status: "Processing",
    priority: "High",
    shipment: "DSP-10482",
  },
  {
    id: "ORD-20481",
    customer: "Flipkart",
    phone: "+91 9876512345",
    pickup: "Noida",
    delivery: "Jaipur",
    items: 8,
    value: 18750,
    status: "Shipped",
    priority: "Medium",
    shipment: "DSP-10481",
  },
  {
    id: "ORD-20480",
    customer: "Reliance Retail",
    phone: "+91 9812345678",
    pickup: "Faridabad",
    delivery: "Gurugram",
    items: 12,
    value: 24600,
    status: "Delivered",
    priority: "Low",
    shipment: "DSP-10480",
  },
  {
    id: "ORD-20479",
    customer: "Tata Motors",
    phone: "+91 9898989898",
    pickup: "Delhi",
    delivery: "Noida",
    items: 3,
    value: 32000,
    status: "Delayed",
    priority: "High",
    shipment: "DSP-10479",
  },
];

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);

  const [newOrder, setNewOrder] = useState({
    customer: "",
    phone: "",
    pickup: "",
    delivery: "",
    items: "1",
    value: "",
    priority: "Medium",
  });

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.delivery.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || order.status === filter;

    return matchesSearch && matchesFilter;
  });

  function createOrder() {
    if (
      !newOrder.customer ||
      !newOrder.phone ||
      !newOrder.pickup ||
      !newOrder.delivery ||
      !newOrder.value
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const order: Order = {
      id: `ORD-${20500 + orders.length}`,
      customer: newOrder.customer,
      phone: newOrder.phone,
      pickup: newOrder.pickup,
      delivery: newOrder.delivery,
      items: Number(newOrder.items),
      value: Number(newOrder.value),
      status: "Processing",
      priority: newOrder.priority,
      shipment: "Not Assigned",
    };

    setOrders([order, ...orders]);

    setNewOrder({
      customer: "",
      phone: "",
      pickup: "",
      delivery: "",
      items: "1",
      value: "",
      priority: "Medium",
    });

    setShowModal(false);
  }

  function deleteOrder(id: string) {
    setOrders(
      orders.filter((order) => order.id !== id)
    );
  }

  return (
    <main className="min-h-screen bg-[#070b14] text-white">

      {/* HEADER */}

      <header className="border-b border-white/10 bg-[#0a0f1c]">
        <div className="flex items-center justify-between px-6 py-6 lg:px-10">

          <div>
            <h1 className="text-2xl font-bold">
              Orders
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Manage customer orders and fulfillment
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
          >
            <Plus size={18} />
            New Order
          </button>

        </div>
      </header>

      <div className="p-6 lg:p-10">

        {/* STATISTICS */}

        <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <Stat
            title="Total Orders"
            value={orders.length.toString()}
            icon={<ShoppingCart size={20} />}
          />

          <Stat
            title="Processing"
            value={
              orders
                .filter(
                  (order) =>
                    order.status === "Processing"
                )
                .length.toString()
            }
            icon={<Clock size={20} />}
          />

          <Stat
            title="Delivered"
            value={
              orders
                .filter(
                  (order) =>
                    order.status === "Delivered"
                )
                .length.toString()
            }
            icon={<CheckCircle size={20} />}
          />

          <Stat
            title="Delayed"
            value={
              orders
                .filter(
                  (order) =>
                    order.status === "Delayed"
                )
                .length.toString()
            }
            icon={<AlertTriangle size={20} />}
          />

        </div>

        {/* SEARCH */}

        <div className="mb-5 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:flex-row">

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
              placeholder="Search order, customer or destination..."
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
            <option>Processing</option>
            <option>Shipped</option>
            <option>Delivered</option>
            <option>Delayed</option>
            <option>Cancelled</option>
          </select>

        </div>

        {/* TABLE */}

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[1100px]">

              <thead className="border-b border-white/10 bg-white/[0.02]">

                <tr className="text-left text-xs text-gray-500">

                  <th className="px-6 py-4">
                    ORDER
                  </th>

                  <th className="px-6 py-4">
                    CUSTOMER
                  </th>

                  <th className="px-6 py-4">
                    ROUTE
                  </th>

                  <th className="px-6 py-4">
                    ITEMS
                  </th>

                  <th className="px-6 py-4">
                    VALUE
                  </th>

                  <th className="px-6 py-4">
                    SHIPMENT
                  </th>

                  <th className="px-6 py-4">
                    STATUS
                  </th>

                  <th className="px-6 py-4">
                    ACTION
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredOrders.map((order) => (

                  <tr
                    key={order.id}
                    className="border-b border-white/5 transition hover:bg-white/[0.03]"
                  >

                    {/* ORDER */}

                    <td className="px-6 py-5">

                      <p className="font-medium text-cyan-400">
                        {order.id}
                      </p>

                      <p className="mt-1 text-xs text-gray-600">
                        {order.priority} priority
                      </p>

                    </td>

                    {/* CUSTOMER */}

                    <td className="px-6 py-5">

                      <p className="text-sm">
                        {order.customer}
                      </p>

                      <p className="mt-1 text-xs text-gray-600">
                        {order.phone}
                      </p>

                    </td>

                    {/* ROUTE */}

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-2 text-sm">

                        <MapPin
                          size={14}
                          className="text-cyan-400"
                        />

                        {order.pickup}

                        <span className="text-gray-600">
                          →
                        </span>

                        {order.delivery}

                      </div>

                    </td>

                    {/* ITEMS */}

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-2 text-sm">

                        <Package
                          size={15}
                          className="text-gray-500"
                        />

                        {order.items}

                      </div>

                    </td>

                    {/* VALUE */}

                    <td className="px-6 py-5">

                      <span className="text-sm font-medium">
                        ₹{order.value.toLocaleString("en-IN")}
                      </span>

                    </td>

                    {/* SHIPMENT */}

                    <td className="px-6 py-5">

                      <span className="text-sm text-cyan-400">
                        {order.shipment}
                      </span>

                    </td>

                    {/* STATUS */}

                    <td className="px-6 py-5">

                      <Status status={order.status} />

                    </td>

                    {/* DELETE */}

                    <td className="px-6 py-5">

                      <button
                        onClick={() =>
                          deleteOrder(order.id)
                        }
                        className="rounded-lg p-2 text-gray-500 transition hover:bg-red-400/10 hover:text-red-400"
                      >
                        <Trash2 size={17} />
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {filteredOrders.length === 0 && (

            <div className="py-20 text-center">

              <ShoppingCart
                size={40}
                className="mx-auto text-gray-700"
              />

              <p className="mt-4 text-gray-500">
                No orders found
              </p>

            </div>

          )}

        </div>

      </div>

      {/* CREATE ORDER MODAL */}

      {showModal && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">

          <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-[#0b111e] p-6 shadow-2xl">

            {/* MODAL HEADER */}

            <div className="mb-6 flex items-center justify-between">

              <div>

                <h2 className="text-xl font-semibold">
                  Create New Order
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  Add a customer order to Dispatcch
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
                label="Customer Name *"
                placeholder="e.g. Amazon India"
                value={newOrder.customer}
                onChange={(value) =>
                  setNewOrder({
                    ...newOrder,
                    customer: value,
                  })
                }
              />

              <Input
                label="Phone Number *"
                placeholder="+91 9876543210"
                value={newOrder.phone}
                onChange={(value) =>
                  setNewOrder({
                    ...newOrder,
                    phone: value,
                  })
                }
              />

              <div className="grid gap-4 sm:grid-cols-2">

                <Input
                  label="Pickup Location *"
                  placeholder="e.g. Gurugram"
                  value={newOrder.pickup}
                  onChange={(value) =>
                    setNewOrder({
                      ...newOrder,
                      pickup: value,
                    })
                  }
                />

                <Input
                  label="Delivery Location *"
                  placeholder="e.g. New Delhi"
                  value={newOrder.delivery}
                  onChange={(value) =>
                    setNewOrder({
                      ...newOrder,
                      delivery: value,
                    })
                  }
                />

              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                <Input
                  label="Number of Items"
                  placeholder="1"
                  value={newOrder.items}
                  onChange={(value) =>
                    setNewOrder({
                      ...newOrder,
                      items: value,
                    })
                  }
                />

                <Input
                  label="Order Value *"
                  placeholder="₹25000"
                  value={newOrder.value}
                  onChange={(value) =>
                    setNewOrder({
                      ...newOrder,
                      value,
                    })
                  }
                />

              </div>

              <div>

                <label className="mb-2 block text-xs text-gray-500">
                  Priority
                </label>

                <select
                  value={newOrder.priority}
                  onChange={(e) =>
                    setNewOrder({
                      ...newOrder,
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
                onClick={createOrder}
                className="mt-3 w-full rounded-xl bg-cyan-400 py-3 font-semibold text-black transition hover:bg-cyan-300"
              >
                Create Order
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}

/* ---------------- STAT ---------------- */

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

/* ---------------- STATUS ---------------- */

function Status({
  status,
}: {
  status: string;
}) {
  const styles: Record<string, string> = {
    Processing:
      "bg-yellow-400/10 text-yellow-400",

    Shipped:
      "bg-blue-400/10 text-blue-400",

    Delivered:
      "bg-emerald-400/10 text-emerald-400",

    Delayed:
      "bg-red-400/10 text-red-400",

    Cancelled:
      "bg-gray-400/10 text-gray-400",
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

/* ---------------- INPUT ---------------- */

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