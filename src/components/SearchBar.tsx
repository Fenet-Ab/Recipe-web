import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type Props = {
  onSearch: (query: string, type: "name" | "ingredient" | "category") => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<"name" | "ingredient" | "category">("name");

  return (
    <div className="flex flex-col sm:flex-row gap-2 mb-6 w-full max-w-md sm:max-w-lg md:max-w-xl">
      <Input className="bg-white w-full"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        className="border px-2 py-1 rounded-md bg-white text-sm"
        value={type}
        onChange={(e) => setType(e.target.value as any)}
      >
        <option value="name" className="text-orange-500">Meal Name</option>
        <option value="ingredient" className="text-orange-500">Ingredient</option>
        <option value="category" className="text-orange-500">Category</option>
      </select>
      <Button className="px-4 sm:px-6 text-sm sm:text-base" onClick={() => onSearch(query, type)}>Search</Button>
    </div>
  );
}
