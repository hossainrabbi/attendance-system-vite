import LeftDoubleArrowIcon from "@/assets/icons/LeftDoubleArrowIcon";
import RightDoubleArrowIcon from "@/assets/icons/RightDoubleArrowIcon";
import { cn } from "@/lib/utils";
import { Flex, Pagination, type PaginationProps } from "antd";
import { useMemo } from "react";
import CSelect from "../../components/ui/form/CustomSelect";
import "./pagination.css";

export interface ICustomPagination extends PaginationProps {
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
  className,
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

  const handlePagination = (page: number) => {
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
      <Flex align="center" gap={10} className="text-sm font-semibold text-text">
        <span>Page</span>

        <CSelect
          size="middle"
          value={page}
          className="min-w-[52px]"
          options={selectOptions}
          onChange={handleSelect}
          allowClear={false}
        />

        <span>of {totalPages}</span>
      </Flex>

      {/* Ant Design Pagination */}
      <Pagination
        total={total}
        current={page}
        pageSize={limit}
        showSizeChanger={false}
        onChange={handlePagination}
        className={cn("custom-pagination", className)}
        itemRender={(_, type, el) => {
          switch (type) {
            case "prev":
              return <LeftDoubleArrowIcon className="-mt-px" />;
            case "next":
              return <RightDoubleArrowIcon className="-mt-px" />;
            default:
              return el;
          }
        }}
      />
    </Flex>
  );
}
