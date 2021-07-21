import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default MainPage;
const MainPage = () => (
    let { _id } = useParams();
  
    const { loading, data: userData } = useQuery(QUERY_ME);
  
    const { loadingProject, data: projectData } = useQuery(PROJECT, {
      variables: { _id },
    });
  
    const projects = userData?.me?.projects;
  
    return (
      <>
        <Header></Header>
        <ProjectViewer projects={projects} loading={loading}>
          <ProjectCard project={projectData?.project}></ProjectCard>
        </ProjectViewer>
        <Footer></Footer>
      </>
    );
  <>
    
    
  </>
);

export default MainPage;
