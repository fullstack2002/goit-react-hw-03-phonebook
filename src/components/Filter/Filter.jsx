import PropTypes from "prop-types";

const Filter = ({handleFilter}) => (
  <>
    <p>Find contacts by Name</p>
    <input
      type="text"
      onChange={handleFilter}
    />
  </>
)
Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
}
export default Filter;