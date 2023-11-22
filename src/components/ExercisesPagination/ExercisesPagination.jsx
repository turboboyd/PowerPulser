import React from 'react'
import useExercise from '../../hooks/useExercise';
import css from './ExercisesPagination.module.css'

function ExercisesPagination({currentPage, setCurrentPage, limit }) {
    const { exercisesFilter, exercisesTotalRecords } = useExercise();
   
    const totalPages = exercisesFilter ? Math.ceil((exercisesTotalRecords / limit)) : 0;
    const handlePageChange = (page) => {
        const newPage = Math.min(Math.max(1, page), totalPages);
        const newStartIndex = (newPage - 1) * limit;

        if (newStartIndex < exercisesTotalRecords) {
            setCurrentPage(newPage);
        }
    };
    const visiblePagination = (limit !== exercisesTotalRecords)
    return (
        <>
         {visiblePagination && <div className={css.pagination}>
            {Array.from(
                { length: totalPages },
                (_, index) =>
                    index * limit < exercisesTotalRecords && (
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