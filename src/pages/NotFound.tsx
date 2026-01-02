import BuoyIcon from "@/assets/icons/BuoyIcon";
import { Button, Flex } from "antd";
import { useNavigate } from "react-router";

type Props = {
  title?: string;
};

export default function NotFound({ title = "Sorry, page not found" }: Props) {
  const navigate = useNavigate();

  return (
    <Flex
      align="center"
      justify="center"
      className="w-screen h-screen flex justify-center items-center relative"
    >
      <div className="text-center">
        <h2 className="flex items-center text-center justify-center gap-2 text-9xl font-bold text-primary/60">
          4
          <BuoyIcon
            classNames={{
              svg: "animate-spin size-20",
              path: "!fill-primary",
            }}
          />
          4
        </h2>
        <h4 className="text-primary text-xl font-semibold uppercase mt-4 mb-8">
          {title}
        </h4>
        <div>
          <Button
            className="bg-primary"
            type="primary"
            onClick={() => navigate(-1)}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </Flex>
  );
}
