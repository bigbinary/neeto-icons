import React from "react";

import copy from "copy-to-clipboard";
import toast from "react-hot-toast";

import * as Icons from "../../../../lib";

export default function IconItem({ name }) {
  console.log(Icons);
  const Icon = Icons[name];
  const copyName = () => {
    copy(name);
    toast(`${name} has been copied to clipboard.`, {
      icon: "🎉",
      style: {
        borderRadius: "4px",
        background: "#1e1e20",
        color: "#fff",
        padding: "4px 8px",
        fontSize: 14,
      },
    });
  };
  return (
    <div
      onClick={copyName}
      className="flex flex-col items-center justify-center col-span-1 p-8 transition-all transform bg-white border rounded cursor-pointer hover:bg-gray-100"
    >
      <Icon size={24} color="#68737D" />
      <div className="mt-2 text-xs text-gray-700">{name}</div>
    </div>
  );
}
