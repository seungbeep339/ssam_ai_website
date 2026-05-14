"use client";

import { useEffect, useState } from "react";

type TaskEntry = {
  id: string;
  task: string;
  assignment: string;
  progress: string;
};

type Row = {
  id: string;
  week: string;
  day: string;
  date: string;
  tasks: TaskEntry[];
};

function newTask(): TaskEntry {
  return { id: crypto.randomUUID(), task: "", assignment: "", progress: "" };
}

function newRow(): Row {
  return { id: crypto.randomUUID(), week: "", day: "", date: "", tasks: [newTask()] };
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
      <span className="invisible whitespace-pre text-sm px-2 py-1 row-start-1 col-start-1" aria-hidden>
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

function ProgressInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const numeric = value.replace("%", "");

  return (
    <div className="inline-flex items-center">
      <div className="inline-grid" style={{ minWidth: "2rem" }}>
        <span className="invisible whitespace-pre text-sm px-2 py-1 row-start-1 col-start-1" aria-hidden>
          {numeric || "0"}
        </span>
        <input
          value={numeric}
          onChange={(e) => {
            const raw = e.target.value.replace(/[^0-9]/g, "");
            onChange(raw ? `${raw}%` : "");
          }}
          placeholder="0"
          className="row-start-1 col-start-1 min-w-0 bg-transparent text-sm text-gray-800 outline-none px-2 py-1 placeholder-gray-300"
        />
      </div>
      <span className="text-sm text-gray-400 pr-2">%</span>
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
  const updateGroup = (rowId: string, key: keyof Omit<Row, "id" | "tasks">, value: string) => {
    onRowsChange(rows.map((r) => (r.id === rowId ? { ...r, [key]: value } : r)));
  };

  const updateTask = (rowId: string, taskId: string, key: keyof Omit<TaskEntry, "id">, value: string) => {
    onRowsChange(
      rows.map((r) =>
        r.id === rowId
          ? { ...r, tasks: r.tasks.map((t) => (t.id === taskId ? { ...t, [key]: value } : t)) }
          : r
      )
    );
  };

  const addTask = (rowId: string) => {
    onRowsChange(rows.map((r) => (r.id === rowId ? { ...r, tasks: [...r.tasks, newTask()] } : r)));
  };

  const deleteTask = (rowId: string, taskId: string) => {
    onRowsChange(
      rows.flatMap((r) => {
        if (r.id !== rowId) return [r];
        const tasks = r.tasks.filter((t) => t.id !== taskId);
        return tasks.length > 0 ? [{ ...r, tasks }] : [];
      })
    );
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
        <table className="text-sm border-collapse">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {["Week #", "Day", "Date", "Task", "Assignment", "Progress"].map((label) => (
                <th
                  key={label}
                  className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide whitespace-nowrap"
                >
                  {label}
                </th>
              ))}
              <th className="px-3 py-3 w-14" />
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) =>
              row.tasks.map((task, taskIndex) => {
                const isLastTask = taskIndex === row.tasks.length - 1;
                const isLastRow = rowIndex === rows.length - 1;
                const groupBorder = isLastTask && !isLastRow ? "border-b-2 border-gray-200" : "border-b border-gray-50";

                return (
                  <tr key={task.id} className={`group hover:bg-gray-50 ${groupBorder}`}>
                    {taskIndex === 0 && (
                      <>
                        <td rowSpan={row.tasks.length} className="px-1 py-0.5 align-top border-r border-gray-100">
                          <AutoSizeInput value={row.week} onChange={(v) => updateGroup(row.id, "week", v)} placeholder="Week #" />
                        </td>
                        <td rowSpan={row.tasks.length} className="px-1 py-0.5 align-top border-r border-gray-100">
                          <AutoSizeInput value={row.day} onChange={(v) => updateGroup(row.id, "day", v)} placeholder="Day" />
                        </td>
                        <td rowSpan={row.tasks.length} className="px-1 py-0.5 align-top border-r border-gray-100">
                          <AutoSizeInput value={row.date} onChange={(v) => updateGroup(row.id, "date", v)} placeholder="Date" />
                        </td>
                      </>
                    )}
                    <td className="px-1 py-0.5 whitespace-nowrap">
                      <AutoSizeInput value={task.task} onChange={(v) => updateTask(row.id, task.id, "task", v)} placeholder="Task" />
                    </td>
                    <td className="px-1 py-0.5 whitespace-nowrap">
                      <AutoSizeInput value={task.assignment} onChange={(v) => updateTask(row.id, task.id, "assignment", v)} placeholder="Assignment" />
                    </td>
                    <td className="px-1 py-0.5 whitespace-nowrap">
                      <ProgressInput value={task.progress} onChange={(v) => updateTask(row.id, task.id, "progress", v)} />
                    </td>
                    <td className="px-2 py-0.5">
                      <div className="flex items-center gap-2">
                        {isLastTask && (
                          <button
                            onClick={() => addTask(row.id)}
                            className="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-gray-600 transition text-base leading-none"
                            aria-label="Add task"
                          >
                            +
                          </button>
                        )}
                        <button
                          onClick={() => deleteTask(row.id, task.id)}
                          className="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-400 transition text-xs leading-none"
                          aria-label="Delete task"
                        >
                          ✕
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
        <div className="px-4 py-3 border-t border-gray-100">
          <button
            onClick={() => onRowsChange([...rows, newRow()])}
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
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const eng = localStorage.getItem("kpi_engineers");
      const biz = localStorage.getItem("kpi_business");
      if (eng) setEngineers(JSON.parse(eng));
      if (biz) setBusiness(JSON.parse(biz));
    } catch {}
  }, []);

  const handleSave = () => {
    localStorage.setItem("kpi_engineers", JSON.stringify(engineers));
    localStorage.setItem("kpi_business", JSON.stringify(business));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl space-y-12">
        <h1 className="text-2xl font-bold text-gray-900">KPI</h1>
        <KPITable title="Engineers" rows={engineers} onRowsChange={setEngineers} />
        <KPITable title="Business" rows={business} onRowsChange={setBusiness} />
        <div className="flex items-center gap-4">
          <button
            onClick={handleSave}
            className="gradient-btn rounded-md px-6 py-2.5 text-sm font-semibold text-white shadow-sm"
          >
            Save
          </button>
          {saved && <span className="text-sm text-gray-400">Saved</span>}
        </div>
      </div>
    </div>
  );
}
