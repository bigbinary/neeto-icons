import React from "react";

import IconItem from "./IconItem";
import { DEFAULT_CLASS_NAME } from "./constants";

export default function IconsList({ searchTerm, icons, listName, className = DEFAULT_CLASS_NAME }) {
  const filteredIconsList = Object.keys(icons).filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filteredIconsList.length === 0 ? (
    <div className="px-8 text-sm text-gray-600">No {listName} found.</div>
  ) : (
    <div className={className}>
      {filteredIconsList.map((key) => (
        <IconItem key={key} Icon={icons[key]} name={key} />
      ))}
    </div>
  );
}
