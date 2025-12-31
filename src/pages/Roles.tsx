import CTable from "@/features/table/CustomTable";
import useTable from "@/hooks/useTable";
import type { ColumnType } from "antd/es/table";
import { useState } from "react";

// Demo usage
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  joinDate: string;
  department: string;
}

export const Roles = () => {
  const { page, limit, setPagination } = useTable();
  const [loading, setLoading] = useState(false);
  const [data] = useState<User[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "active",
      joinDate: "2024-01-15",
      department: "Engineering",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "active",
      joinDate: "2024-02-20",
      department: "Marketing",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Moderator",
      status: "inactive",
      joinDate: "2024-03-10",
      department: "Sales",
    },
    {
      id: 4,
      name: "Alice Williams",
      email: "alice@example.com",
      role: "User",
      status: "active",
      joinDate: "2024-04-05",
      department: "Engineering",
    },
    {
      id: 5,
      name: "Charlie Brown",
      email: "charlie@example.com",
      role: "Admin",
      status: "active",
      joinDate: "2024-05-12",
      department: "HR",
    },
    {
      id: 6,
      name: "Diana Prince",
      email: "diana@example.com",
      role: "User",
      status: "active",
      joinDate: "2024-06-18",
      department: "Design",
    },
    {
      id: 7,
      name: "Ethan Hunt",
      email: "ethan@example.com",
      role: "Moderator",
      status: "inactive",
      joinDate: "2024-07-22",
      department: "Operations",
    },
    {
      id: 8,
      name: "Fiona Green",
      email: "fiona@example.com",
      role: "User",
      status: "active",
      joinDate: "2024-08-30",
      department: "Finance",
    },
  ]);

  const columns: ColumnType<User>[] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 80,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 150,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 200,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      width: 120,
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
      width: 150,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 120,
      render: (status: string) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            status === "active"
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Join Date",
      dataIndex: "joinDate",
      key: "joinDate",
      width: 120,
    },
  ];

  const handleLoadData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleSelectionChange = (keys: React.Key[], rows: User[]) => {
    console.log("Selected Keys:", keys);
    console.log("Selected Rows:", rows);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 flex gap-3">
          <button
            onClick={handleLoadData}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Test Skeleton Loading
          </button>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Table with Row Selection
          </h2>
          <CTable<User>
            data={data}
            columns={columns}
            loading={loading}
            selectable
            onSelectionChange={handleSelectionChange}
            paginationProps={{
              limit,
              page,
              total: 100,
              onPagination: setPagination,
            }}
          />
        </div>
      </div>
    </div>
  );
};
