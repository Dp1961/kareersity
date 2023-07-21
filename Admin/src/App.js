import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Topbar from "../src/components/topbar/Topbar";
import Dashboard from "./pages/Dasboard/Dashboard";
import Login from "./pages/Login/Login";
import Category from "./pages/Category/Category";
import Testimonial from "./pages/Testimonials/Testimonial";
import Faq from "./pages/FAQ/Faq";
import Learners from "./pages/Learners/Learners";
import Experts from "./pages/Experts/Experts";
import Addexperts from "./pages/Experts/Addexperts";
import Editexperts from "./pages/Experts/Editexperts";
import Blogs from "./pages/Blogs/Blogs";
import Educators from "./pages/Educator/Educator";
import Adminlist from "./pages/Adminlist/Adminlist";
import Adminrole from "./pages/Adminlist/Adminrole";
import Permission from "./pages/Adminlist/Permissionlist";
import Purchase from "./pages/Purchase/Purchase";
import Addblog from "./pages/Blogs/Addblog";
import Editblog from "./pages/Blogs/Editblog";
import Courses from "./pages/Course/Course";
import Coursebundle from "./pages/Course/Coursebundle";
import Sendmail from "./pages/Learners/Sendmail";
import Addcourse from "./pages/Course/Addcourse";
import Viewcourse from "./pages/Course/Viewcourse";
import Viewlearners from "./pages/Learners/Viewlearners";
import Changepassword from "./pages/Changepasword/Changepassword";



function App() {
  return (
    <Router>
      {/* <Login/> */}
      <SideBar>
        <Topbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/testimonials" element={<Testimonial/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/learners" element={<Learners/>}/>
          <Route path="/list_to_experts" element={<Experts/>}/>
          <Route path="/add_experts" element={<Addexperts/>}/>
          <Route path="/edit_experts" element={<Editexperts/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/educators" element={<Educators/>}/>
          <Route path="/admin_user" element={<Adminlist/>}/>
          <Route path="/admin_role" element={<Adminrole/>}/>
          <Route path="/permission_list" element={<Permission/>}/>
          <Route path="/purchase_list" element={<Purchase/>}/>
          <Route path="/add_blog" element={<Addblog/>}/>
          <Route path="/edit_blog" element={<Editblog/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/course_bundle" element={<Coursebundle/>}/>
          <Route path="/send_mail" element={<Sendmail/>}/>
          <Route path="/add_course" element={<Addcourse/>}/>
          <Route path="/view_course" element={<Viewcourse/>}/>
          <Route path="/view_learners" element={<Viewlearners/>}/>
          <Route path="/change_password" element={<Changepassword/>}/>


        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
