import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Top from "./Richer/Top";
import User from "./Richer/LoginUser/Index";
import Timeline from "./Richer/Timeline/Index";
import Schedule from "./Richer/Schedule/Index";
import Search from "./Richer/Search/Index";
import Bell from "./Richer/Bell/Index";
import Renraku from "./Richer/Renraku/Index";

const App = () => {
    return (
        <div className={"richer"}>
            <BrowserRouter>
                <div className={"richer__header"}>
                    <div className={"richer__header__navList"}>
                        <Link
                            to="/Richer/Top"
                            className={"richer__header__navList__title"}
                        >
                            Richer
                        </Link>
                        <Link
                            to="/Richer/LoginUser/Index"
                            className={"richer__header__navList__user"}
                        >
                            <span
                                className={
                                    "richer__header__navList__user__icon"
                                }
                            ></span>
                        </Link>
                    </div>
                </div>
                <div className={"richer__changeContent"}>
                    <div className={"richer__changeContent__space"}></div>
                    <Route path="/Richer/Top">
                        <Top />
                    </Route>
                    <Route path="/Richer/LoginUser/Index">
                        <User />
                    </Route>
                    <Route path="/Richer/Timeline/Index">
                        <Timeline />
                    </Route>
                    <Route path="/Richer/Schedule/Index">
                        <Schedule />
                    </Route>
                    <Route path="/Richer/Search/Index">
                        <Search />
                    </Route>
                    <Route path="/Richer/Bell/Index">
                        <Bell />
                    </Route>
                    <Route path="/Richer/Renraku/Index">
                        <Renraku />
                    </Route>
                    <div className={"richer__changeContent__space"}></div>
                </div>
                <div className={"richer__footer"}>
                    <ul className={"richer__footer__navList"}>
                        <li className={"richer__footer__navList__timeline"}>
                            <Link to="/Richer/Timeline/Index">投稿</Link>
                        </li>
                        <li className={"richer__footer__navList__schedule"}>
                            <Link to="/Richer/Schedule/Index">予定</Link>
                        </li>
                        <li className={"richer__footer__navList__search"}>
                            <Link to="/Richer/Search/Index">検索</Link>
                        </li>
                        <li className={"richer__footer__navList__bell"}>
                            <Link to="/Richer/Bell/Index">通知</Link>
                        </li>
                        <li className={"richer__footer__navList__renraku"}>
                            <Link to="/Richer/Renraku/Index">連絡</Link>
                        </li>
                    </ul>
                </div>
            </BrowserRouter>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
