import Me from "../components/Me";
import NavBar from "../components/NavBar";
import MyProject from "../components/MyProject";
import Skills from "../components/Skills";

const MainPage = () => {
  return (
    <>
      <NavBar/>
      <Me scrollId={"home"} scrollId2={"sec"}/>
      <Skills />
      <MyProject scrollId3={"thr"}/>
    </>
  );
};

export default MainPage;
