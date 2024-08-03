/*import { FilterValues } from '../../../types/propsFilter';

interface Props {
  Title: string;
  name: string;
  data: number[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  filterValues: FilterValues;
}

export const Select = ({ Title, name, data, filterValues, onChange }: Props) => {
  return (
    <div className='field'>
      <label htmlFor={`${name}`}>{Title}</label>
      <select id='cars' name={`${name}`} value={filterValues[name as keyof typeof filterValues]} onChange={onChange}>
        {data &&
          data.map((ele) => (
            <option key={`${ele}`} value={ele.toString()}>
              {ele}
            </option>
          ))}
      </select>
    </div>
  );
};*/
