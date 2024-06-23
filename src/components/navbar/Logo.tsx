import Link from 'next/link';
import { Button } from '../ui/button';
import { GiBullHorns } from 'react-icons/gi';

type Props = {};
const Logo = (props: Props) => {
  return (
    <Button asChild size="icon">
      <Link href="/">
        <GiBullHorns className="w-6 h-6" />
      </Link>
    </Button>
  );
};
export default Logo;
