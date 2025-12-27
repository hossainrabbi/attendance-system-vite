import { cn } from "@/lib/utils";
import { Skeleton, Table } from "antd";
import type { AnyObject } from "antd/es/_util/type";
import type { ColumnType, TableProps } from "antd/es/table";
import React, { useState, type Key } from "react";
import type { ICustomPagination } from "./CustomPagination";
import CPagination from "./CustomPagination";

// Generic type for table data
interface CustomTableProps<T> extends TableProps<T> {
  data: T[];
  columns: ColumnType<T>[];
  loading?: boolean;
  rowKey?: string | ((record: T) => string);
  selectable?: boolean;
  onSelectionChange?: (selectedRowKeys: React.Key[], selectedRows: T[]) => void;
  wrapperClassName?: string;
  scroll?: { x?: string | number | true; y?: string | number };
  paginationProps?: ICustomPagination;
}

export default function CTable<T extends AnyObject>({
  data,
  columns,
  loading = false,
  selectable = false,
  onSelectionChange,
  rowKey = "id",
  wrapperClassName,
  scroll,
  paginationProps,
  ...rest
}: CustomTableProps<T>) {
  const rowSelection = useRowSelection(selectable, onSelectionChange);
  const tableColumns = getTableColumns(columns, loading);
  const tableData = getTableData(data, loading, rowKey);

  return (
    <div className={cn("bg-white rounded-lg shadow-sm", wrapperClassName)}>
      <Table<T>
        columns={tableColumns}
        dataSource={tableData}
        rowKey={rowKey}
        rowSelection={loading ? undefined : rowSelection}
        loading={false}
        pagination={false}
        scroll={scroll || { x: "max-content" }}
        {...rest}
      />

      {!!paginationProps && <CPagination {...paginationProps} />}
    </div>
  );
}

// Row selection logic
function useRowSelection<T>(
  selectable: boolean,
  onSelectionChange?: (selectedRowKeys: React.Key[], selectedRows: T[]) => void
) {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);

  const rowSelection = selectable
    ? {
        selectedRowKeys,
        onChange: (keys: React.Key[], rows: T[]) => {
          setSelectedRowKeys(keys);
          onSelectionChange?.(keys, rows);
        },
      }
    : undefined;

  return rowSelection;
}

// Skeleton loading with table data
function getTableData<T>(
  data: T[],
  loading: boolean,
  rowKey: string | ((record: T) => string)
): T[] {
  if (loading) {
    return Array.from({ length: 5 }, (_, index) => ({
      key: `skeleton-${index}`,
      id: `skeleton-${index}`,
    })) as unknown as T[];
  }

  return data.map((item, idx) => ({
    ...item,
    key: rowKey || idx,
  }));
}

// Skeleton loading with table columns
function getTableColumns<T>(
  columns: ColumnType<T>[],
  loading: boolean
): ColumnType<T>[] {
  if (loading) {
    return columns.map((col) => ({
      ...col,
      render: () => <Skeleton.Input active size="small" className="w-full" />,
    }));
  }

  return columns;
}
