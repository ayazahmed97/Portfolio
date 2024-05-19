import Link from 'next/link';
import { FC } from 'react';
import Button from '../ui/Button';
// import { Instagram } from 'lucide-react';

interface ProfileNameProps {}

const ProfileName: FC<ProfileNameProps> = ({}) => {
    return (
        <div className="text-4xl flex flex-col font-bold text-highlight">
            Ayaz Ahmed
            <div className="text-2xl font-thin flex justify-between items-center">

                Full Stack Blockchain Developer
                {/* <Link
                    className="block md:hidden"
                    href="https://cointelegraph.com/tags/blockchain"
                    target='_blank'
                >
                    <Button variant="primary" sizes={'iconOnly'}>
                        <Instagram />
                    </Button>
                </Link> */}
            </div>
        </div>
    );
};

export default ProfileName;
