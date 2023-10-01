import React from "react";

function Chip({ name }) {
  return (
    <span className="bg-gray-300 py-3 px-4 rounded-md font-montserrat font-bold hover:bg-Ruby hover:text-white mb-4 mr-4">
      {name}
    </span>
  );
}

export default Chip;
