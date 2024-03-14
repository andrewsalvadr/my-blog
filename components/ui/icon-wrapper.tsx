"use client"
// IconWrapper.js

import React, { ReactNode } from 'react';
import { useTheme } from 'next-themes';

interface IconWrapperProps {
  children: ReactNode;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children }) => {
  const { theme } = useTheme();
  let iconColor = theme === 'dark' ? 'text-white' : 'text-black';

  const childrenWithClass = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      const existingClasses = child.props.className || '';
      const newClasses = `${existingClasses} ${iconColor}`;
      return React.cloneElement(child as any, { className: newClasses });
    }
    return child;
  });

  return <>{childrenWithClass}</>;
};

export default IconWrapper;
