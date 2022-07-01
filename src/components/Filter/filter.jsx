export const Filter = props => {
  return (
    <label>
      Find
      <input onChange={props.onChange} type="text" value={props.value} />
    </label>
  );
};
