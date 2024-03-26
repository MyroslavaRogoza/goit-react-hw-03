

const SearchBox = ({ filter, onFilter }) => {
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(evt) => {
          return onFilter(evt.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
