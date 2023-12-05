/* eslint-disable react/prop-types */

function Comment(props) {
  const { name, body } = props.comment

  return (
    <div>
      <h1>{name}</h1>
      <p>{body}</p>
    </div>
  )
}

export default Comment