import Banner from "../sections/banner/Banner";
import Footer from "../sections/footer/Footer";
import Header from "../sections/header/Header";
import TaskTable from "../sections/task-table/TaskTable";


function Layout() {
  return (
    <>
        <Header />
        <Banner />
        <TaskTable />
        <Footer />
    </>
  )
}

export default Layout