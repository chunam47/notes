import iconSearch from "../../assets/search.png";
import "./index.scss";

interface Props {
  setTextFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Filter = ({ setTextFilter }: Props) => {
  return (
    <>
      <form action="" className="search-bar">
        <img src={iconSearch} alt="" />
        <input
          type="search"
          name="search"
          pattern=".*\S.*"
          required
          placeholder="Find your note ..."
          onChange={(e) => setTextFilter(e.target.value)}
        />
      </form>
    </>
  );
};

export default Filter;
