import { Input } from '../ui/input';

type Props = {};
const NavSearch = (props: Props) => {
  return (
    <Input
      type="search"
      placeholder="Search Product..."
      className="max-w-xs dark:bg-muted"
    />
  );
};
export default NavSearch;
