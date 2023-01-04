import React, { useState } from "react";
import Header from "./Header";
import IconsList from "./IconsList";
import { Toaster } from "react-hot-toast";
import * as icons from "../../../lib/icons";
import * as logos from "../../../lib/logos";

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Toaster position="bottom-center" />
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h2 className="px-8 pt-4">Logos</h2>
      <IconsList searchTerm={searchTerm} icons={logos} listName="logos" />
      <h2 className="px-8 pt-4">Icons</h2>
      <IconsList searchTerm={searchTerm} icons={icons} listName="icons" />
    </>
  );
}

export default Dashboard;
