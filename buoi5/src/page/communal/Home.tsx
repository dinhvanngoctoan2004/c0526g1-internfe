import { useEffect, useState } from "react";
import { getAllDataStudents, deleteStudent } from "../../server/studenServer";
import ConfirmDeletion from "../../component/manage/confirmDeletion";
import { useNavigate } from "react-router-dom";
import Footed from "../../component/Communal/Footed";
import List from "../../component/manage/List";

const Home = () => {
  return (
    <>
      <List />
    </>
  );
};
export default Home;
