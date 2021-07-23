import HeaderBar from "./Header";
import Footer from "./Footer";
import Main from "./Main";

const MainPage = () => {
  return (
    <>
      <HeaderBar></HeaderBar>
      <h2 style={{ marginLeft: "4%" }}>Portfolio</h2>
      <Main></Main>
      <Footer></Footer>
    </>
  );
};

export default MainPage;
