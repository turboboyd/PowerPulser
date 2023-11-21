import React from 'react'
import useExercise from '../../hooks/useExercise';
import css from './ExercisesPagination.module.css'

function ExercisesPagination({currentPage, setCurrentPage, selectedCategory, limit}) {
    const { exercisesFilter } = useExercise();
    const totalItemArray = [{ 'body parts': 10 }, { 'muscles': 19 }, { 'equipment': 28 }]
    const currentCategory = selectedCategory.toLowerCase()

    const currentTotalItem = totalItemArray.filter(page => {
        const current = page[currentCategory]
        return current
    })
    const totalItem = Object.values(currentTotalItem[0])
    const item = totalItem[0]
   
    const totalPages = exercisesFilter ? Math.ceil((item / limit)) : 0;
    const handlePageChange = (page) => {
        const newPage = Math.min(Math.max(1, page), totalPages);
        const newStartIndex = (newPage - 1) * limit;

        if (newStartIndex < item) {
            setCurrentPage(newPage);
        }
    };
    const visiblePagination = (limit !== item)
    return (
        <>
         {visiblePagination && <div className={css.pagination}>
            {Array.from(
                { length: totalPages },
                (_, index) =>
                    index * limit < item && (
                        <span
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={
                                currentPage === index + 1
                                    ? `${css.active} ${css.paginationDot} ${css.activeDot}`
                                    : css.paginationDot
                            }
                        >
                            &bull;
                        </span>
                    )
            )}
        </div>}
        </>
    );
};

export default ExercisesPagination