import { cn } from "@/lib/utils";
import { selectSearchOption } from "@/utils/utils";
import { Flex, Pagination, Select } from "antd";

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
  page,
  wrapperClassName,
  onPagination,
}: ICustomPagination) {
  const selectOptions = [...Array(Math.ceil(total / limit))].map(
    (_, index) => ({
      label: `${index + 1}`,
      value: `${index + 1}`,
    })
  );

  const onSelect = (page: number) => {
    if (onPagination) {
      onPagination(page, limit);
    }
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
        <span>
          <Select
            size="small"
            value={page}
            className="min-w-[52px]"
            options={selectOptions}
            onChange={onSelect}
            showSearch={{
              filterOption: selectSearchOption,
            }}
          />
        </span>
        <span>of {Math.ceil(total / limit)}</span>
      </Flex>

      {/* Ant Design Pagination */}
      <Pagination
        total={total}
        current={page}
        pageSize={limit}
        showSizeChanger={false}
        onChange={onPagination}
        //   itemRender={(_, type, __) => {
        //     if (type === "prev") return <PrevPaginationIcon />;
        //     if (type === "next") return <NextPaginationIcon />;
        //     return __;
        //   }}
      />
    </Flex>
  );
}
