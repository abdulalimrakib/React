/* eslint-disable react/prop-types */


function Todo({ todo }) {
    const {userId, id, title } = todo

    return (
        <>
            <h2>ID: {id}</h2>
            <h2>User ID: {userId}</h2>
            <h3>Title: {title}</h3>
        </>
    )
}

export default Todo