import './Container.css';

import React from 'react';

import { cnSelect } from '../../cnSelect';
import { PropForm, PropSize, PropView, PropWidth } from '../../types';

type Props = {
  className?: string;
  disabled?: boolean;
  form?: PropForm;
  size?: PropSize;
  width?: PropWidth;
  view?: PropView;
  focused?: boolean;
  children: React.ReactNode;
};

export const Container = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    size = 'm',
    width = 'default',
    form = 'default',
    view = 'default',
    className,
    disabled,
    children,
    focused,
  } = props;

  return (
    <div
      className={cnSelect({ size, width, form, disabled, view, focused }, [className])}
      ref={ref}
    >
      {children}
    </div>
  );
});

Container.displayName = 'Container';