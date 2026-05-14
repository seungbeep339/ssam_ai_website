"use client";

import { useState } from "react";

type Row = {
  id: string;
  week: string;
  day: string;
  date: string;
  task: string;
  assignment: string;
  progress: string;
};

const COLUMNS: { key: keyof Omit<Row, "id">; label: string }[] = [
  { key: "week", label: "Week #" },
  { key: "day", label: "Day" },
  { key: "date", label: "Date" },
  { key: "task", label: "Task" },
  { key: "assignment", label: "Assignment" },
  { key: "progress", label: "Progress" },
];

function newRow(): Row {
  return {
    id: crypto.randomUUID(),
    week: "",
    day: "",
    date: "",
    task: "",
    assignment: "",
    progress: "",
  };
}

function AutoSizeInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <div className="inline-grid" style={{ minWidth: "3rem" }}>
      <span
        className="invisible whitespace-pre text-sm px-2 py-1 row-start-1 col-start-1"
        aria-hidden
      >
        {value || placeholder}
      </span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="row-start-1 col-start-1 min-w-0 bg-transparent text-sm text-gray-800 outline-none px-2 py-1 placeholder-gray-300"
      />
    </div>
  );
}

function KPITable({
  title,
  rows,
  onRowsChange,
}: {
  title: string;
  rows: Row[];
  onRowsChange: (rows: Row[]) => void;
}) {
  const updateCell = (id: string, key: keyof Omit<Row, "id">, value: string) => {
    onRowsChange(rows.map((r) => (r.id === id ? { ...r, [key]: value } : r)));
  };

  const addRow = () => onRowsChange([...rows, newRow()]);

  const deleteRow = (id: string) => onRowsChange(rows.filter((r) => r.id !== id));

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
        <table className="text-sm border-collapse">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {COLUMNS.map((col) => (
                <th
                  key={col.key}
                  className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide whitespace-nowrap"
                >
                  {col.label}
                </th>
              ))}
              <th className="px-3 py-3 w-8" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((row) => (
              <tr key={row.id} className="group hover:bg-gray-50">
                {COLUMNS.map((col) => (
                  <td key={col.key} className="px-1 py-0.5 whitespace-nowrap">
                    <AutoSizeInput
                      value={row[col.key]}
                      onChange={(v) => updateCell(row.id, col.key, v)}
                      placeholder={col.label}
                    />
                  </td>
                ))}
                <td className="px-3 py-0.5">
                  <button
                    onClick={() => deleteRow(row.id)}
                    className="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-400 transition text-xs leading-none"
                    aria-label="Delete row"
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-4 py-3 border-t border-gray-100">
          <button
            onClick={addRow}
            className="text-sm text-gray-400 hover:text-gray-700 transition"
          >
            + Add row
          </button>
        </div>
      </div>
    </div>
  );
}

export default function KPIPage() {
  const [engineers, setEngineers] = useState<Row[]>([newRow()]);
  const [business, setBusiness] = useState<Row[]>([newRow()]);

  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl space-y-12">
        <h1 className="text-2xl font-bold text-gray-900">KPI</h1>
        <KPITable title="Engineers" rows={engineers} onRowsChange={setEngineers} />
        <KPITable title="Business" rows={business} onRowsChange={setBusiness} />
      </div>
    </div>
  );
}
