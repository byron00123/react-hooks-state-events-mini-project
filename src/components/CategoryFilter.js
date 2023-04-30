import React from "react";

function CategoryFilter(props) {
  const { selectedBtn, onBtn, categories } = props;
  return (
    <div className="categories">
      <h5>Category filters</h5>

      {categories.map((category, i) => (
        <button
          className={onBtn === category ? "selected" : ""}
          key={i}
          onClick={() => {
            selectedBtn(category);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;