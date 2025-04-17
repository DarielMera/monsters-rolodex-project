import "./search-box.styles.css"

const SearchBox = ({ onChangeHandler }) => {
	return (
		<section className="search-box-main-container">
			<label htmlFor="search-box" className="search-box-label">				Search:
            </label>
				<input id="search-box" className="search-box-container" type="search" onChange={onChangeHandler} />
		</section>
	)
}

export default SearchBox
