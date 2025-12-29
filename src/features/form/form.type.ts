// form.type.ts
import type { Rule } from "antd/es/form";

// Utility type to extract nested paths
type PathImpl<T, Key extends keyof T> = Key extends string
  ? T[Key] extends Record<string, unknown>
    ?
        | `${Key}.${PathImpl<T[Key], Exclude<keyof T[Key], keyof unknown[]>> &
            string}`
        | `${Key}`
    : `${Key}`
  : never;

type Path<T> = PathImpl<T, keyof T> | keyof T;

// Only extract string paths for array conversion
type StringPath<T> = Path<T> extends infer P
  ? P extends string
    ? P
    : never
  : never;

// Convert dot notation to array notation
type PathToArray<T extends string> = T extends `${infer A}.${infer B}`
  ? [A, ...PathToArray<B>]
  : [T];

// Union type that accepts both string paths and array paths
export type FieldPath<T> = StringPath<T> | PathToArray<StringPath<T>>;

export interface BaseFieldProps<T = Record<string, unknown>> {
  name: FieldPath<T>;
  label?: string;
  rules?: Rule[];
  required?: boolean;
  tooltip?: string;
  dependencies?: FieldPath<T>[];
  hidden?: boolean;
}
