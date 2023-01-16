import React from 'react'
import classNames from 'classnames/bind';
import styles from "./AppT.module.scss";
import Button from './Button/Button';
const cx = classNames.bind(styles)
const AppT = () => {
  return (
    <div className={cx('AppT')}>
       <div className={cx('wrapper')}>CSS Modules conming from Library...</div> 
       <Button/>
        </div>
  )
}

export default AppT