import React from 'react';

const Pagination = ({ currentPage, totalPages, onNext, onPrevious }) => {
  return (
    <div className="flex justify-between mt-4">
      <button onClick={onPrevious} disabled={currentPage === 1} className="bg-gray-500 text-white p-2 rounded">
        Previous
      </button>
      <span className="self-center">{`Page ${currentPage} of ${totalPages}`}</span>
      <button onClick={onNext} disabled={currentPage === totalPages} className="bg-gray-500 text-white p-2 rounded">
        Next
      </button>
    </div>
  );
};

export default Pagination;
