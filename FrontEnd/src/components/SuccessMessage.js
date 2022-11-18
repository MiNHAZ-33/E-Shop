import React from 'react'

function SuccessMessage({ message }) {
    return (
        <div class="p-4 mb-4 text-sm text-black bg-green-400 rounded-lg dark:bg-green-400" role="alert">
            <span class="font-medium">{message}</span>
        </div>
    )
}

export default SuccessMessage;