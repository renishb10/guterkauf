import { LuUser2 } from 'react-icons/lu';
import { currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';

async function UserIcon() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;
  if (profileImage)
    return (
      <Image
        src={profileImage}
        className="w-6 h-6 rounded-full object-cover"
        alt="profile image"
        width={80}
        height={80}
      />
    );
  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
}
export default UserIcon;
