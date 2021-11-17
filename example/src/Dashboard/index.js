import React, { useState } from "react";
import Header from "./Header";
import IconList from "./IconList";
import { Toaster } from "react-hot-toast";

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Toaster position="bottom-center" />
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <IconList searchTerm={searchTerm} />
    </>
  );
}

export default Dashboard;
