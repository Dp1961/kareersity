import "../../css/Topbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topBar">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-9 col-md-8 col-sm-6">
                <div className="wrapperleft">
                  {/* <h1>Admin Portal</h1> */}
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 align-self-center d-sm-flex justify-content-sm-end">
                <div className="wrapperleft d-flex">
                  <div class="button-header pull-left">
                    <div className="icon-headernav">
                      <i><IoMdNotificationsOutline /></i>
                      {/* <div class="notification-dot"></div> */}
                    </div>
                  </div>
                  <div className="userDetails d-flex">
                    <span className="user">
                      <FaUserAlt />
                    </span>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
