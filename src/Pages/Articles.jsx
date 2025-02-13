import React, { useState, useEffect } from 'react';

const Articles = () => {
    const [showModal, setShowModal] = useState(false);

    // Show the modal when the page loads
    useEffect(() => {
        setShowModal(true);
    }, []);

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <h1 className='text-3xl font-bold'>Articles Page</h1>

            {/* Modal Component */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg w-[90%] max-w-md">
                        <h2 className="text-lg font-semibold mb-4">Article Modal</h2>
                        <p>Here is the content of the article...</p>
                        <button
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Articles;
