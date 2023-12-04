/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function Post(props) {
  const { id, title, body } = props.post
  return (
    <div className="p-3">
      <h2 className="text-xl font-medium">{title}</h2>
      <div className="flex gap-2 py-2">
        <h4 className="px-5 text-l">{body.slice(0, 50)} ...</h4>
        <Link to={title}>Read more</Link>
      </div>
    </div>
  )
}

export default Post