import { cn } from "@/lib/utils";
import { Skeleton, Table } from "antd";
import type { ColumnType, TableProps } from "antd/es/table";
import { useState, type Key } from "react";
import type { ICustomPagination } from "./CustomPagination";
import CPagination from "./CustomPagination";

/* ======================================================
   Types
====================================================== */

interface CustomTableProps<T> extends TableProps<T> {
  data: T[];
  columns: ColumnType<T>[];
  loading?: boolean;
  rowKey?: string | ((record: T) => string);
  selectable?: boolean;
  onSelectionChange?: (selectedRowKeys: Key[], selectedRows: T[]) => void;
  wrapperClassName?: string;
  paginationProps?: ICustomPagination;
}

/* ======================================================
   Main Table Component
====================================================== */

export default function CTable<T>({
  data,
  columns,
  loading = false,
  selectable = false,
  onSelectionChange,
  rowKey = "id",
  wrapperClassName,
  paginationProps,
  scroll = { x: "max-content" },
  ...rest
}: CustomTableProps<T>) {
  const rowSelection = useRowSelection(selectable, loading, onSelectionChange);

  const tableColumns = getTableColumns(columns, loading);

  return (
    <div className={cn("bg-white rounded-lg shadow-sm", wrapperClassName)}>
      <Table<T>
        {...rest}
        rowKey={rowKey}
        columns={tableColumns}
        dataSource={data}
        rowSelection={selectable && !loading ? rowSelection : undefined}
        loading={false}
        pagination={false}
        scroll={scroll}
      />

      {!!paginationProps && <CPagination {...paginationProps} />}
    </div>
  );
}

/* ======================================================
   Row Selection Logic 
====================================================== */

function useRowSelection<T>(
  selectable: boolean,
  loading: boolean,
  onSelectionChange?: (keys: Key[], rows: T[]) => void
) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);

  if (!selectable || loading) {
    return undefined;
  }

  return {
    selectedRowKeys,
    onChange: (keys: Key[], rows: T[]) => {
      setSelectedRowKeys(keys);
      onSelectionChange?.(keys, rows);
    },
  };
}

/* ======================================================
   Skeleton Column Renderer
====================================================== */

function getTableColumns<T>(
  columns: ColumnType<T>[],
  loading: boolean
): ColumnType<T>[] {
  if (!loading) return columns;

  return columns.map((col) => ({
    ...col,
    render: () => (
      <Skeleton.Input active size="small" className="w-full h-6!" />
    ),
  }));
}
