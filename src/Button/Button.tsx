import React from 'react'
import classNames from 'classnames/bind';
import styles from "./Button.module.scss";
const cx = classNames.bind(styles)
const Button = () => {
  return (
    <div className={cx('Button')}>
       <div className={cx('wrapper')}>Button Modules conming from Library...</div> 
        </div>
  )
}

export default Button