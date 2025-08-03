import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from 'lucide-react'

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
          <h2 className="text-xl  md:text-lg font-semibold mt-2 line-clamp-2">{title}</h2>
             <a href="#"className='text-sm text-orange-500 flex items-center gap-1'>See Detail <ArrowRightIcon className='w-4 h-4'/></a>
        </CardContent>
      </Card>
    </Link>
  );
}
