import { ComponentPropsWithoutRef } from 'react';
import './CardButton.css';

type CardButtonType = ComponentPropsWithoutRef<'button'> & {};

export const CardButton = ({ children, ...props }: CardButtonType) => {
  return (
    <button {...props} className={'cardButtonStyle'}>
      {children}
    </button>
  );
};
