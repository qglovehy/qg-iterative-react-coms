import { useMemo } from 'react';

const useElectron = () => {
  const electron = useMemo(
    () => (window?.require?.('electron') ? window.require('electron') : null),
    [],
  );

  return electron;
};

export default useElectron;
