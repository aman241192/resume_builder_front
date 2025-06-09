// // ReactPrint.jsx
// import React, { useRef } from "react";
// import { useReactToPrint } from "react-to-print";
// import ComponentToPrint from "./ComponentToPrint";

// const ReactPrint = () => {
//   const componentRef = useRef();

//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//     documentTitle: "Test Print",
//     onBeforeGetContent: () => Promise.resolve(),
//     onAfterPrint: () => console.log("Printed successfully!"),
//   });

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <button
//         onClick={handlePrint}
//         className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
//       >
//         Print This
//       </button>

//       <ComponentToPrint ref={componentRef} />
//     </div>
//   );
// };

// export default ReactPrint;

// import React from "react";
// import { DndContext } from "@dnd-kit/core";

// import { Draggable } from "./Draggable";
// import { Droppable } from "./Droppable";

// const ReactPrint = () => {
//   return (
//     <div>
//       <DndContext>
//         <Draggable />
//         <Droppable />
//       </DndContext>
//     </div>
//   );
// };

// export default ReactPrint;

import React, { useState, useRef } from "react";

const initialItems = [
  { id: 1, title: "Frontend Developer at ABC Corp" },
  { id: 2, title: "React Developer at XYZ Ltd" },
  { id: 3, title: "UI Engineer at Techsoft" },
];

const ReactPrint = () => {
  const [items, setItems] = useState(initialItems);
  const dragItem = useRef();
  const dragOverItem = useRef();

  const handleDragStart = (index) => {
    dragItem.current = index;
  };

  const handleDragEnter = (index) => {
    dragOverItem.current = index;
  };

  const handleDragEnd = () => {
    const listCopy = [...items];
    const draggedItemContent = listCopy[dragItem.current];
    listCopy.splice(dragItem.current, 1);
    listCopy.splice(dragOverItem.current, 0, draggedItemContent);

    dragItem.current = null;
    dragOverItem.current = null;
    setItems(listCopy);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Work Experience (Drag to Reorder)</h2>
      {items.map((item, index) => (
        <div
          key={item.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragEnter={() => handleDragEnter(index)}
          onDragEnd={handleDragEnd}
          style={{
            padding: "12px 20px",
            margin: "10px 0",
            background: "#f0f0f0",
            border: "1px solid #ccc",
            borderRadius: "8px",
            cursor: "grab",
          }}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default ReactPrint;
