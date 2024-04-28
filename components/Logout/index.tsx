"use client";

import { createClient } from '@/utils/supabase/client';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

export default function Logout({ value }: any) {

    const router = useRouter();
    const supabase = createClient();


    const handleSignOut = async () => {
        const supabase = createClient();
        await supabase.auth.signOut();
        await router.push('/login');
    };

    return (
        <div className="flex items-center">

            <button
                onClick={handleSignOut}
                className="py-2 px-4 rounded-md no-underline text-gray-600 hover:text-gray-800"
            >
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </button>
        </div>
    );


}