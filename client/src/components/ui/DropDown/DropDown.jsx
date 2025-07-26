import {IconChevronDown} from '@tabler/icons-react';
const DropDown = props => {
  return (
    <>
      <select
        name=""
        id=""
        className="border border-outline rounded-xs focus:outline-none h-fit px-2 py-3 w-full"
      >
        <option value="Choose an option">Choose an option</option>
        {props.options.map(opt => {
          return (
            <>
              <option key={opt.id} value={opt.value}>
                {opt.value}
              </option>
            </>
          );
        })}
      </select>
    </>
  );
};

export default DropDown;
