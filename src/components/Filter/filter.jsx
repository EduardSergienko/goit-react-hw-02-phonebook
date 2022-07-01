export const Filter = ({ onChange, value }) => {
  return (
    <label>
      Find
      <input onChange={onChange} type="text" value={value} />
    </label>
  );
};
