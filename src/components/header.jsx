const Header = ({ primary, subtitle, description }) => {
  return (
    <div>
      {" "}
      {/* Adjusted to Tailwind's closest margin class */}{" "}
      {/* Tooltip wrapper */}
      <h2
        className="text-gray-900 font-semibold text-center" // Properly closed className attribute
      >
        {primary}
      </h2>
      <div className="absolute group-hover:block bg-gray-700 text-gray-900 text-sm p-2 right-0 z-10">
        {description}
      </div>
      <div
        className="bg-gray-100 rounded-md w-full" // Properly closed className attribute
      >
        <p className="text-gray-500">
          {" "}
          {/* Adjusted color to a shade of gray */}
          {subtitle}
        </p>
      </div>
    </div>
  )
}

export default Header
