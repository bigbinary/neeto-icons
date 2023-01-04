import React from "react";

import IconItem from "./IconItem";

import { iconsList } from "../../../../lib/icons";

export default function IconsList({ searchTerm }) {
  const filteredIconsList = iconsList.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filteredIconsList.length === 0 ? (
    <div className="px-8 text-sm text-gray-600">No icons found.</div>
  ) : (
    <div className="grid w-full grid-cols-3 gap-4 px-8 py-4 md:grid-cols-6 lg:grid-cols-10">
      {filteredIconsList.map((name) => (
        <IconItem key={name} name={name} />
      ))}
    </div>
  );
}
