import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
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
                            to="/"
                            className={"richer__header__navList__title"}
                        >
                            Richer
                        </Link>
                        <Link
                            to="/Richer/LoginUser/Index"
                            className={"richer__header__navList__user"}
                        >
                            プロフ
                        </Link>
                    </div>
                </div>
                <div className={"richer__changeContent"}>
                    <div className={"richer__changeContent__space"}></div>
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
                    <div className={"richer__footer__navList"}>
                        <Link
                            to="/Richer/Timeline/Index"
                            className={"richer__footer__navList__timeline"}
                        >
                            投稿
                        </Link>
                        <Link
                            to="/Richer/Schedule/Index"
                            className={"richer__footer__navList__schedule"}
                        >
                            予定
                        </Link>
                        <Link
                            to="/Richer/Search/Index"
                            className={"richer__footer__navList__search"}
                        >
                            検索
                        </Link>
                        <Link
                            to="/Richer/Bell/Index"
                            className={"richer__footer__navList__bell"}
                        >
                            通知
                        </Link>
                        <Link
                            to="/Richer/Renraku/Index"
                            className={"richer__footer__navList__renraku"}
                        >
                            連絡
                        </Link>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
