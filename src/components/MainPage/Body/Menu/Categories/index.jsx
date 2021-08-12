import React from 'react';
import styles from '../index.module.css';

const Categories = ({ categories, filterItems }) => {
    return (
        <div className={styles.btn_container}>
            {categories.map((category, index) => {
                return (
                    <button
                        type="button"
                        className={styles.filter_btn}
                        key={index}
                        onClick={() => filterItems(category)}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
};

export default Categories;