import { Button } from '../ui/button';
import { FaHeart } from 'react-icons/fa';

type Props = {
  productId: string;
};
const FavoriteToggleButton = ({ productId }: Props) => {
  return (
    <Button size="icon" variant="outline" className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
};
export default FavoriteToggleButton;
