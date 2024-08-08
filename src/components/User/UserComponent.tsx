import { FC } from 'react';
import { IUser } from '@/models/user.interface';
import styles from './UserComponent.module.css'
import Link from 'next/link';


interface IProps {
   user: IUser
}

const UserComponent: FC<IProps> = ({user}) => {
    return (
        <div className={styles.user_card}><h2><Link href={{pathname: '/users/' + user.id, query: {data: JSON.stringify(user)}}}>{user.id}. {user.name}</Link></h2>
           
        </div>
    );
};

export default UserComponent;