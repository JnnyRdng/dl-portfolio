import React, { useState } from 'react';

const useToggle = (initial: boolean = false): [boolean, React.Dispatch<React.SetStateAction<boolean>>, () => void] => {

  const [value, setValue] = useState<boolean>(initial);

  const toggle = () => setValue(current => !current);

  return [ value, setValue, toggle];
}

export default useToggle;
