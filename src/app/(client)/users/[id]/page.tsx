import UserDetailsComponent from '@/components/UserDetails/UserDetailsComponent';

import React, { FC } from 'react';

interface IProps {
    searchParams?: {
        data?: string,

    };
}

const UserDetailsPage: FC<IProps> = ({searchParams}) => {
    let userDetails;
    if (searchParams && searchParams.data) {
        userDetails = JSON.parse(searchParams.data);
    }
    
    return (
        <div>
            <UserDetailsComponent userDetails={userDetails}/>
        </div>
    );
};

export default UserDetailsPage;