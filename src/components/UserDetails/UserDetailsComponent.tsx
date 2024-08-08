import { IUser } from "@/models/user.interface";
import { FC } from "react";
import styles from './UserDetailsComponent.module.css'

interface IProps {
   userDetails: IUser
}

const UserDetailsComponent: FC<IProps> = ({userDetails}) => {
    return (
        <div className={styles.userDetails_card}>
         <h2>{userDetails.name} - {userDetails.username}</h2>
         <div>
            <p><span>ID:</span>{userDetails.id}</p>
            <p><span>Вебсайт:</span>{userDetails.website}</p>
            <p><span>Email:</span>{userDetails.email}</p>
            <p><span>Телефон:</span>{userDetails.phone}</p>
         </div>
        </div>
    );
};

export default UserDetailsComponent;