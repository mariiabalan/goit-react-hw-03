import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.searchbox}>
      <label className={s.textbox}>
        Search contacts by name
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          className={s.input}
          placeholder="Enter name to search"
        />
      </label>
    </div>
  );
};

export default SearchBox;
