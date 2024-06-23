import { Separator } from '@/components/ui/separator';

type Props = {
  text: string;
};
const SectionTitle = ({ text }: Props) => {
  return (
    <div>
      <h2 className="text-3xl font-medium tracking-wider capitalize mb-8">
        {text}
      </h2>
      <Separator />
    </div>
  );
};
export default SectionTitle;
