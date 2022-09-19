import PropTypes from "prop-types";
import { FilterTitle, FilterInput } from "./Filter.styled";

const Filter = ({handleFilter}) => (
  <>
    <FilterTitle>Find contacts by Name</FilterTitle>
    <FilterInput
      type="text"
      onChange={handleFilter}
    />
  </>
)
Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
}
export default Filter;