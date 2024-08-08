import React from 'react';
import Link from "next/link";
import styles from './HeaderComponents.module.css';

const HeaderComponent = () => {
    return (
        <div className={styles.header}>
            <ul className={styles.header_menu}>
                <li>
                    <Link href={'/users'}>Users</Link>
                </li>
                <li>
                    <Link href={'/posts'}>Posts</Link>
                </li>
                <li>
                    <Link href={'/comments'}>Comments</Link>
                </li>
            </ul>
        </div>
    );
};

export default HeaderComponent;