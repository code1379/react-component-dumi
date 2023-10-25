import React, { useEffect, useState, type FC } from 'react';

import classnames from 'classnames';

import './index.less';

interface CheckboxProps {
  // 非受控 => 由外部控制组件状态
  checked?: boolean;
  // 默认状态，由外部控制，如果写了 checked的话，就还是 checked
  defaultChecked?: boolean;
  // 是否禁用状态
  disabled?: boolean;
  onChange?: (e: any) => void;
  children: React.ReactNode;
}

const Checkbox: FC<CheckboxProps> = (props) => {
  const {
    checked: propsChecked = false,
    defaultChecked = false,
    disabled = false,
    onChange,
    children,
  } = props;

  const wrapperCls = classnames({
    'ant-checkbox-wrapper': true,
  });

  const [checked, setChecked] = useState(propsChecked || defaultChecked);

  const cls = classnames({
    'ant-checkbox': true,
    'ant-checkbox-checked': checked,
  });

  const handleClick = (e: any) => {
    e.preventDefault();
    if (disabled) return;
    if ('checked' in props) {
      onChange?.(!propsChecked);
      return;
    }
    setChecked(!checked);
  };

  // 外面的 checked 改变，要修改里面的 checked 值
  useEffect(() => {
    setChecked(propsChecked);
  }, [propsChecked]);

  return (
    <label className={wrapperCls} onClick={handleClick}>
      <span className={cls}>
        <input type="checkbox" className="ant-checkbox-input" />
        <span className="ant-checkbox-inner"></span>
      </span>
      <span>{children}</span>
    </label>
  );
};

export default Checkbox;
