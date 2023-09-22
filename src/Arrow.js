import React from "react";

function Arrow() {
  return (
    <div className="h-16 bg-Snow flex items-center justify-center">
      <span class="inline-block animate-bounce rounded-full p-4 text-Ruby">
        <svg
          class="w-8 h-8 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
      </span>
    </div>
  );
}

export default Arrow;
