import { cn } from "@/lib/utils";
import { Skeleton, Table } from "antd";
import type { ColumnType, TableProps } from "antd/es/table";
import { type Key } from "react";
import type { ICustomPagination } from "./CustomPagination";
import CPagination from "./CustomPagination";
import { useRowSelection } from "./_hooks/useRowSelection";

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

//  Skeleton Column Renderer
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
