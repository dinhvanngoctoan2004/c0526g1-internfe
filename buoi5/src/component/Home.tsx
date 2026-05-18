import { useEffect, useState } from "react";
import { getAllDataStudents, deleteStudent } from "../server/studenServer";
import ConfirmDeletion from "./confirmDeletion";
import { useNavigate } from "react-router-dom";
import Footed from "./Footed";
import List from "./List";

const Home = () => {
  return (
    <>
      <List />
    </>
  );
};
export default Home;
