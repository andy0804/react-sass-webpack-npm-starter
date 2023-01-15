import React from 'react'
import classNames from 'classnames/bind';
import styles from "./AppT.module.scss";
const cx = classNames.bind(styles)
const AppT = () => {
  return (
    <div className={cx('AppT')}>
       <div className={cx('wrapper')}>some new random text coming from library</div> 
        </div>
  )
}

export default AppT