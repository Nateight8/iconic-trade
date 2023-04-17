import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Label } from "@/components/ui/Label";
import { useField } from "formik";
type Props = { name: string };

function SelectX({ ...props }: Props) {
  const [field, meta, helpers] = useField(props.name);
  console.log(props.value);

  return (
    <>
      <div className="flex flex-col my-4 space-y-1.5">
        <Label htmlFor="name">Choose a plan</Label>
        <Select {...props}>
          <SelectTrigger
            onChange={(e) => {
              console.log(e.currentTarget.value);
            }}
          >
            <SelectValue
              className="text-slate-200"
              placeholder="Choose a plan"
            />
            <SelectContent position="popper">
              <SelectItem value="3-m">Three Months</SelectItem>
              <SelectItem value="6-m">Six Months</SelectItem>
              <SelectItem value="9-m">Nine Months</SelectItem>
            </SelectContent>
          </SelectTrigger>
        </Select>
      </div>
    </>
  );
}

export default SelectX;
