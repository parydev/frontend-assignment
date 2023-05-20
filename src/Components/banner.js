//صفحه ی اصلی سایت
import React from 'react';
import styles from "./banner.module.scss";
import ban from "../images/banner.jpg";

const banner = () => {
    return (
        <>
        <div className={styles.bannerimage}>
            <img src={ban} alt="banner"/>
        </div>

        <div className={styles.bannertextstyles}>
            <h1 className="text-5xl font-bold">Welcome to <span className='text-blue-500'>My Project</span></h1>
        </div>

        </>
        
    );
};

export default banner;