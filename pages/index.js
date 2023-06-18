import NavigationBar from "@/components/Navigation/navigation-bar";
import AllContents from "@/components/content/home_content/content";
import Footer from "@/components/footer";
import NavigationMobile from "@/components/Navigation/nav-test";

function IndexPage() {
  return (
    <>
      <NavigationBar />
      <br /><br /><br />
      <AllContents />
      <Footer />
    </>
  );
}

export default IndexPage;