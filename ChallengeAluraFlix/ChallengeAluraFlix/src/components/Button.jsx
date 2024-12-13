import { Link } from 'react-router-dom'
function Button({ name, position, handleClick, path }) {
  return (
    <Link
      className={`px-4 py-2 md:px-6 ${
        position == 'left'
          ? 'bg-blue-500 text-gray-200'
          : 'bg-gray-300 text-gray-950 font-medium'
      } w-full md:w-auto rounded-lg flex justify-center`}
      to={path}
      onClick={handleClick}
    >
      {name}
    </Link>
  )
}

export default Button
