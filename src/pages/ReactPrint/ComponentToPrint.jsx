// ComponentToPrint.jsx
import React from "react";

const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="p-6 bg-white shadow-lg rounded border border-gray-300"
    >
      <h1 className="text-xl font-bold mb-2">Printable Content</h1>
      <p>This content will be printed.</p>
    </div>
  );
});

export default ComponentToPrint;
