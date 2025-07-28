import { useEffect, useState } from "react";

type Props = {
  onSelect: (category: string) => void;
};

export default function CategoryTabs({ onSelect }: Props) {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories.map((c: any) => c.strCategory)));
  }, []);

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 overflow-auto justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className="px-2 sm:px-4 py-1 border-yellow-400 border-2 text-yellow-400 hover:bg-orange-300 hover:text-white rounded-md text-xs sm:text-sm md:text-base"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
