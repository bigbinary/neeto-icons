import React from "react";

import IconItem from "./IconItem";

export default function IconsList({ searchTerm, icons, listName }) {
  const filteredIconsList = Object.keys(icons).filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filteredIconsList.length === 0 ? (
    <div className="px-8 text-sm text-gray-600">No {listName} found.</div>
  ) : (
    <div className="grid w-full grid-cols-3 gap-4 px-8 py-4 md:grid-cols-6 lg:grid-cols-10">
      {filteredIconsList.map((key) => (
        <IconItem key={key} Icon={icons[key]} name={key} />
      ))}
    </div>
  );
}
