'use client';

import { useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  children: React.ReactNode;
};

const subscribe = () => () => {};

const Portal = ({ children }: PortalProps) => {
  const isClient = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  if (!isClient) return null;

  return createPortal(children, document.body);
};

export default Portal;
