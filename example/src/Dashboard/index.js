import React, { useState } from "react";
import Header from "./Header";
import IconsList from "./IconsList";
import { Toaster } from "react-hot-toast";
import * as icons from "../../../src/icons";
import * as logos from "../../../src/logos";
import * as appIcons from "../../../src/app-icons";
import * as typefaceLogos from "../../../src/typeface-logos";
import * as miscIcons from "../../../src/misc";

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Toaster position="bottom-center" />
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h2 className="px-8 pt-4">Icons</h2>
      <IconsList searchTerm={searchTerm} icons={icons} listName="icons" />
      <h2 className="px-8 pt-4">Logos</h2>
      <IconsList searchTerm={searchTerm} icons={logos} listName="logos" />
      <h2 className="px-8 pt-4">App Icons</h2>
      <IconsList searchTerm={searchTerm} icons={appIcons} listName="appIcons" />
      <h2 className="px-8 pt-4">Typeface Logos</h2>
      <IconsList
        searchTerm={searchTerm}
        icons={typefaceLogos}
        listName="typefaceLogos"
        className="grid w-full grid-cols-2 gap-4 px-8 py-4 md:grid-cols-2 lg:grid-cols-4"
      />
      <h2 className="px-8 pt-4">Misc Icons</h2>
      <IconsList searchTerm={searchTerm} icons={miscIcons} listName="miscIcons" />
    </>
  );
}

export default Dashboard;
