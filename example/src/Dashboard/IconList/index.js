import React from "react";

import IconItem from "./IconItem";

import { iconList } from "../../../../lib/icons";

export default function IconList({ searchTerm }) {
  const filteredIconList = iconList.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filteredIconList.length === 0 ? (
    <div className="px-8 text-sm text-gray-600">No icons found.</div>
  ) : (
    <div className="grid w-full grid-cols-3 gap-4 px-8 py-4 md:grid-cols-6 lg:grid-cols-10">
      {filteredIconList.map((name) => (
        <IconItem key={name} name={name} />
      ))}
    </div>
  );
}
