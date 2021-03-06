import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Header from "../header/header.js";
import Footer from "../footer/footer.js";
import ThemeRoutes from "../routes/routing.js";
import Sidebar from '../sidebar/sidebar.js';
import { useUserGroups } from '../../../utils/customHooks/useUserGroups';

import Volunteers from "../views/Volunteers.js";
import Chapters from "../views/Chapters/Chapters.js";
import Sponsors from "../views/Sponsors/Sponsors.js";
import ChapterCard from "../views/Chapters/ChapterCard";
import PendingChapter from "../views/Chapters/PendingChapter";


const FullLayout = props => {
    const history = useHistory();
    const { admin, chapterLeaders, volunteer } = useUserGroups();







    return (
      <div
        id="main-wrapper"
        data-theme="light"
        data-layout="vertical"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
        data-boxed-layout="full"
      >
        <Header  />


            <Sidebar />

        <div className="page-wrapper d-block">
          <div className="page-content container-fluid">
          


              <Switch>
                <Route exact path='/admin/chapters' component={Chapters} />
                {/* only accessible by admins */}
                {admin && <Route exact path='/admin/pending' component={PendingChapter} />}
                <Route exact path='/admin/Sponsors' component={Sponsors} />
                <Route exact path='/admin/volunteers' component={Volunteers} />

                <Route path='/admin/chapters/:id' render={props => <ChapterCard {...props} />} />

                <Redirect from='/admin' to='/admin/chapters' component={Chapters} />
              </Switch>


          </div>
          <Footer />
        </div>
      </div>
    );
}
export default FullLayout;
