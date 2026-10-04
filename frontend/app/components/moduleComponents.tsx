"use client";

import type { ReactNode } from "react";

type StatProps = {
  title: string;
  value: string | number;
  icon?: ReactNode;
  subtitle?: string;
};

export function Stat({
  title,
  value,
  icon,
  subtitle,
}: StatProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-400">{title}</p>

        {icon && (
          <div className="text-cyan-400">
            {icon}
          </div>
        )}
      </div>

      <h3 className="mt-2 text-2xl font-bold text-white">
        {value}
      </h3>

      {subtitle && (
        <p className="mt-1 text-xs text-slate-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}


type InputProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
};

export function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-500"
      />
    </div>
  );
}


type StatusProps = {
  children: ReactNode;
  status?: string;
};

export function Status({
  children,
  status,
}: StatusProps) {
  const text = status || String(children);

  let className =
    "inline-flex rounded-full px-3 py-1 text-xs font-medium";

  const lower = text.toLowerCase();

  if (
    lower.includes("active") ||
    lower.includes("delivered") ||
    lower.includes("completed") ||
    lower.includes("available")
  ) {
    className +=
      " bg-emerald-500/10 text-emerald-400";
  } else if (
    lower.includes("pending") ||
    lower.includes("transit") ||
    lower.includes("progress")
  ) {
    className +=
      " bg-amber-500/10 text-amber-400";
  } else if (
    lower.includes("inactive") ||
    lower.includes("cancel") ||
    lower.includes("failed")
  ) {
    className +=
      " bg-red-500/10 text-red-400";
  } else {
    className +=
      " bg-slate-700/50 text-slate-300";
  }

  return (
    <span className={className}>
      {children}
    </span>
  );
}