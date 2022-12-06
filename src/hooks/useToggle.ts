import { Dispatch, SetStateAction, useCallback, useState } from 'react';

export const useToggle = (
  initialState = false
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] => {
  const [state, setState] = useState<boolean>(initialState);
  const toggle = useCallback(() => setState((state) => !state), [state]);

  return [state, toggle, setState];
};
