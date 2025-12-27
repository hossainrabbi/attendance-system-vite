import { CForm } from "@/features/form/Form";
import { Button } from "antd";
import type { Dayjs } from "dayjs";

interface IUser {
  username: string;
  email: string;
  age: number;
  role: "admin" | "user" | "guest";
  birthDate: Dayjs;
  isActive: boolean;
  newsletter: boolean;
  gender: "male" | "female" | "other";
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
}

export default function Users() {
  const [form] = CForm.useForm<IUser>();

  const onSubmit = (values: IUser) => {
    console.log("Form values:", values);
  };

  return (
    <CForm<IUser>
      form={form}
      onSubmit={onSubmit}
      initialValues={{
        role: "user",
        isActive: true,
        newsletter: false,
      }}
    >
      <CForm.Text<IUser>
        name="username"
        label="Username"
        required
        rules={[{ required: true, message: "Please enter username" }]}
        placeholder="Enter username"
      />

      <CForm.Text<IUser>
        name="email"
        label="Email"
        required
        rules={[
          { required: true, message: "Please enter email" },
          { type: "email", message: "Please enter valid email" },
        ]}
        placeholder="Enter email"
      />

      <CForm.Number<IUser>
        name="age"
        label="Age"
        min={0}
        max={120}
        placeholder="Enter age"
      />

      <CForm.Select<IUser>
        name="role"
        label="Role"
        options={[
          { label: "Admin", value: "admin" },
          { label: "User", value: "user" },
          { label: "Guest", value: "guest" },
        ]}
        placeholder="Select role"
      />

      <CForm.Date<IUser>
        name="birthDate"
        label="Birth Date"
        placeholder="Select date"
      />

      <CForm.Switch<IUser> name="isActive" label="Active Status" />

      <CForm.Checkbox<IUser> name="newsletter" label="Newsletter">
        Subscribe to newsletter
      </CForm.Checkbox>

      <CForm.Radio<IUser>
        name="gender"
        label="Gender"
        options={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" },
        ]}
      />

      <CForm.Text<IUser>
        name={["address", "street"]}
        label="Street"
        placeholder="Enter street"
      />
      <CForm.Text<IUser>
        name={["address", "city"]}
        label="City"
        placeholder="Enter city"
      />
      <CForm.Text<IUser>
        name={["address", "zipCode"]}
        label="Zip Code"
        placeholder="Enter zip code"
      />

      <CForm.Item>
        <Button type="primary" htmlType="submit" style={{ marginRight: 8 }}>
          Submit
        </Button>
        <Button type="default" onClick={() => form.resetFields()}>
          Reset
        </Button>
      </CForm.Item>
    </CForm>
  );
}
