"use client";

import { Input } from "@/components/ui";

type SearchBarProps = {
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
};

export default function SearchBar({
  placeholder,
  value = "",
  onChange,
}: SearchBarProps) {
  return (
    <div className="mt-12">
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}