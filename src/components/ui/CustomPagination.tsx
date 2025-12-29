import { cn } from "@/lib/utils";
import { filterOptionByLabel } from "@/utils/utils";
import { Flex, Pagination, Select } from "antd";
import { useMemo } from "react";

export interface ICustomPagination {
  limit: number;
  total: number;
  page?: number;
  wrapperClassName?: string;
  onPagination?: (page: number, limit: number) => void;
}

export default function CPagination({
  limit,
  total,
  page = 1,
  wrapperClassName,
  onPagination,
}: ICustomPagination) {
  const totalPages = Math.ceil(total / limit);

  const selectOptions = useMemo(
    () =>
      Array.from({ length: totalPages }, (_, index) => ({
        label: String(index + 1),
        value: index + 1,
      })),
    [totalPages]
  );

  const handleSelect = (selectedPage: number) => {
    onPagination?.(selectedPage, limit);
  };

  const handlePaginationChange = (page: number) => {
    onPagination?.(page, limit);
  };

  return (
    <Flex
      wrap
      gap={8}
      align="center"
      justify="space-between"
      className={cn("px-4 py-2.5", wrapperClassName)}
    >
      <Flex align="center" gap={10} className="text-sm font-semibold">
        <span>Page</span>

        <Select
          size="small"
          value={page}
          className="min-w-[52px]"
          options={selectOptions}
          onChange={handleSelect}
          showSearch={{
            filterOption: filterOptionByLabel,
          }}
        />

        <span>of {totalPages}</span>
      </Flex>

      {/* Ant Design Pagination */}
      <Pagination
        total={total}
        current={page}
        pageSize={limit}
        showSizeChanger={false}
        onChange={handlePaginationChange}
      />
    </Flex>
  );
}
