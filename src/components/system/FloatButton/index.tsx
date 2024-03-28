import classNames from 'classnames';
import React, { FC, memo } from 'react';

import { IFloatButtonProps } from './types';

//@ts-ignore
import styles from './index.scss';

const FloatButton: FC<IFloatButtonProps> = (props) => {
  const { className = '', style = {}, onClick = () => void 0, icon = null } = props;

  return (
    <div className={classNames(styles.FloatButton, className)} onClick={onClick} style={style}>
      {icon}
    </div>
  );
};

const MemoFloatButton = memo(FloatButton);

export default MemoFloatButton;
