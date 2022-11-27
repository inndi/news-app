import { ChangeEvent, useState } from 'react';

import { useDidUpdate } from '../../hooks/hooks';

import './Toggle.scss';

interface ToggleProps {
  isChecked?: boolean;
  onCheckedChange?: (isChecked: boolean) => void;
}

const Toggle = (props: ToggleProps) => {
  const [isChecked, setIsChecked] = useState(props.isChecked);

  useDidUpdate(() => setIsChecked(props.isChecked), [props.isChecked]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);

    if (typeof props.onCheckedChange === 'function') {
      props.onCheckedChange(e.target.checked);
    }
  };

  return (
    <div className="toggle">
      <input
        className="toggle__checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
    </div>
  );
};

export default Toggle;
