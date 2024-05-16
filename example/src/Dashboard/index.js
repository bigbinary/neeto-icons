import React, { useState } from "react";
import Header from "./Header";
import IconsList from "./IconsList";
import { Toaster } from "react-hot-toast";
import * as icons from "../../../generate/icons";
import * as logos from "../../../generate/logos";
import * as appIcons from "../../../generate/app-icons";
import * as typefaceLogos from "../../../generate/typeface-logos";
import * as miscIcons from "../../../generate/misc";
import { useSearchParams } from "react-router-dom";

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedIcon = searchParams.get("selectedIcon");

  const onIconSelect = (selectedIconName) => {
    setSearchParams({ selectedIcon: selectedIconName });
  };

  const commonProps = {
    searchTerm,
    onIconSelect,
    selectedIcon,
  };

  return (
    <>
      <Toaster position="bottom-center" />
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h2 className="px-8 pt-4">Icons</h2>
      <IconsList size={24} icons={icons} listName="icons" {...commonProps} />
      <h2 className="px-8 pt-4">Logos</h2>
      <IconsList icons={logos} listName="logos" {...commonProps} />
      <h2 className="px-8 pt-4">App Icons</h2>
      <IconsList icons={appIcons} listName="appIcons" {...commonProps} />
      <h2 className="px-8 pt-4">Typeface Logos</h2>
      <IconsList
        icons={typefaceLogos}
        listName="typefaceLogos"
        className="grid w-full grid-cols-2 gap-4 px-8 py-4 md:grid-cols-2 lg:grid-cols-4"
        {...commonProps}
      />
      <h2 className="px-8 pt-4">Misc Icons</h2>
      <IconsList icons={miscIcons} listName="miscIcons" {...commonProps} />
    </>
  );
}

export default Dashboard;
