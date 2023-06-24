import NavigationBar from "@/components/Navigation/navigation-bar";
import Footer from "@/components/footer";
import BlogsPage from "@/components/content/blogs/Blogs";

function IndexPage() {
  return (
    <>
      <NavigationBar />
      <br /><br /><br />
      <BlogsPage />
      <Footer />
    </>
  );
}

export default IndexPage;