import React, { forwardRef, useEffect, useRef } from "react";
import classNames from "classnames";

const IconItem = ({ name, Icon, onSelect, isSelected, size = 36 }, ref) => {
  return (
    <div
      ref={ref}
      onClick={() => onSelect(name)}
      className={classNames(
        "flex flex-col items-center justify-center col-span-1 p-8 transition-all transform bg-white border rounded cursor-pointer hover:bg-gray-100",
        {
          "border-blue-500": isSelected,
        }
      )}
    >
      <Icon {...{ size }} color="#68737D" />
      <div className="mt-3 text-xs text-gray-700">{name}</div>
    </div>
  );
};

export default forwardRef(IconItem);
