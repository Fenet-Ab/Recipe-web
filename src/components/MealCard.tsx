import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

type Props = {
  id: string;
  title: string;
  image: string;
};

export default function MealCard({ id, title, image }: Props) {
  return (
    <Link to={`/meal/${id}`}>
      <Card className="hover:shadow-xl transition w-full max-w-sm">
        <img src={image} alt={title} className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-t-xl" />
        <CardContent className="p-3 sm:p-4">
          <h2 className="text-sm sm:text-base md:text-lg font-semibold mt-2 line-clamp-2">{title}</h2>
        </CardContent>
      </Card>
    </Link>
  );
}
