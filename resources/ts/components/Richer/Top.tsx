import React from "react";

const Top = () => {
    addEventListener("DOMContentLoaded", () => {
        // 時間によって挨拶の種類を変更する処理。

        const getGreetingText = document.querySelector("#greetingText");

        const GREETING_TYPE: readonly string[] = [
            "おはようございます",
            "こんにちは",
            "こんばんは",
        ];
        const [MORNING, AFTERNOON, EVENING] = GREETING_TYPE;

        const now = new Date();
        const hour: number = now.getHours();

        if (hour >= 4 && hour <= 10) {
            getGreetingText!.innerHTML = MORNING;
        } else if (hour >= 11 && hour <= 17) {
            getGreetingText!.innerHTML = AFTERNOON;
        } else if (hour >= 18 || hour <= 3) {
            getGreetingText!.innerHTML = EVENING;
        }
        const topPageAnimationBg = document.querySelector(
            "#topPageAnimationBg"
        );
        const onikitiImg = document.querySelector("#onikitiImg");
        const mamemakiImg = document.querySelector("#mamemakiImg");
        const loveImg = document.querySelector("#loveImg");
        const topPageAnimationText = document.querySelector(
            "#topPageAnimationText"
        );
        let time = 800;
        setTimeout(() => {
            onikitiImg?.classList.add("show");
        }, time);
        time += 1200;
        setTimeout(() => {
            Object(topPageAnimationText).innerHTML = "オラはおにきち";
        }, time);
        time += 1200;
        setTimeout(() => {
            Object(topPageAnimationText).innerHTML = "2月になると...";
        }, time);
        time += 1200;
        setTimeout(() => {
            topPageAnimationText!.classList.add("show");
            Object(topPageAnimationText).innerHTML = "悪いことしたくなるのだ";
        }, time);
        time += 1200;
        setTimeout(() => {
            onikitiImg?.classList.remove("show");
            Object(topPageAnimationText).innerHTML = "";
        }, time);
        time += 1500;
        setTimeout(() => {
            Object(topPageAnimationText).innerHTML = "そして村に行き...";
        }, time);
        time += 2000;
        setTimeout(() => {
            Object(topPageAnimationText).innerHTML = "";
        }, time);
        time += 1000;
        setTimeout(() => {
            mamemakiImg?.classList.add("show");
        }, time);
        time += 3000;
        setTimeout(() => {
            mamemakiImg?.classList.remove("show");
        }, time);
        time += 500;
        setTimeout(() => {
            topPageAnimationBg?.classList.add("show");
            Object(topPageAnimationText).innerHTML = "そして2月といえば...";
        }, time);
        time += 1200;
        setTimeout(() => {
            Object(topPageAnimationText).innerHTML = "大切な人に想いを伝える";
        }, time);
        time += 1200;
        setTimeout(() => {
            Object(topPageAnimationText).innerHTML = "バレンタインデー🍫";
            Object(topPageAnimationText).setAttribute(
                "style",
                "color: #e76a7f;"
            );
        }, time);
        time += 1000;
        setTimeout(() => {
            Object(topPageAnimationText).innerHTML = "";
        }, time);
        time += 1000;
        setTimeout(() => {
            loveImg?.classList.add("show");
        }, time);
        time += 2000;
        setTimeout(() => {
            loveImg?.classList.remove("show");
        }, time);
        time += 1200;
        setTimeout(() => {
            Object(topPageAnimationText).innerHTML =
                "良い2月をお過ごしください";
            Object(topPageAnimationText).setAttribute(
                "style",
                "color: #795548;"
            );
        }, time);

        const MENU_LIST: readonly string[] = [
            "選択",
            "投稿",
            "予定",
            "検索",
            "通知",
            "連絡",
        ];
        const getOption = document.querySelectorAll("option");
        const OPTION_LIST = Object(getOption).length;
        const explanationList = document.querySelector("#explanationList");

        for (let i = 0; i < OPTION_LIST; i++) {
            Object(getOption[i]).innerHTML = MENU_LIST[i];
        }
        // 画像URL

        const SELECT_IMAGES: { [key: string]: string } = {
            default: "/images/bg.jpg",
            timeline: "/images/bg.jpg",
            schedule: "/images/bg.jpg",
            search: "/images/bg.jpg",
            notification: "/images/bg.jpg",
            contact: "/images/bg.jpg",
        };

        // 分割代入で画像URLを扱う。

        const {
            default: DEFAULT,
            timeline: TIMELINE,
            schedule: SCHEDULE,
            search: SEARCH,
            notification: NOTIFICATION,
            contact: CONTACT,
        } = SELECT_IMAGES;

        // セレクトボックスの値によって画像を切り替える。
        const changeImage = document.querySelector("#changeImage");

        explanationList?.addEventListener("change", () => {
            Object(explanationList).firstElementChild.innerHTML = "基本";

            switch (Object(explanationList).value) {
                case "selectTimeline":
                    changeImage!.setAttribute("src", TIMELINE);
                    break;
                case "selectSchedule":
                    changeImage!.setAttribute("src", SCHEDULE);
                    break;
                case "selectSearch":
                    changeImage!.setAttribute("src", SEARCH);
                    break;
                case "selectNotification":
                    changeImage!.setAttribute("src", NOTIFICATION);
                    break;
                case "selectContact":
                    changeImage!.setAttribute("src", CONTACT);
                    break;
                default:
                    changeImage!.setAttribute("src", DEFAULT);
                    break;
            }
        });

        // 画像プレビュー表示用の処理。(セレクトボックスの色も変わる)
        try {
            changeImage?.addEventListener("click", () => {
                setTimeout(() => {
                    changeImage!.setAttribute("style", "width:100%;");
                    explanationList!.setAttribute(
                        "style",
                        "background-color: goldenrod; color: white;"
                    );
                }, 100);
                addEventListener("click", () => {
                    changeImage!.setAttribute("style", "width:80%;");
                    explanationList!.setAttribute(
                        "style",
                        "background-color: white; color: black;"
                    );
                });
            });
        } catch (e) {
            alert("ページを再読み込みしてください。");
        }
    });
    return (
        <>
            <h5 id="greetingText" className={"greetingText"}></h5>
            <div id="topPageAnimation" className={"topPageAnimation"}>
                <h3
                    id="topPageAnimationText"
                    className={"topPageAnimation__text"}
                ></h3>
                <img
                    src="/images/onikiti.jpg"
                    id="onikitiImg"
                    className={"topPageAnimation__onikitiImg"}
                ></img>
                <img
                    src="/images/mamemaki.jpg"
                    id="mamemakiImg"
                    className={"topPageAnimation__mamemakiImg"}
                ></img>
                <img
                    src="/images/bg.jpg"
                    id="topPageAnimationBg"
                    className={"topPageAnimation__bg"}
                ></img>
                <img
                    src="/images/love.jpg"
                    id="loveImg"
                    className={"topPageAnimation__loveImg"}
                ></img>
            </div>
            <div className={"explanation"}>
                <h4 className={"explanation__text"}>このアプリの使い方</h4>
                <img
                    id="changeImage"
                    className={"explanation__imagePosition"}
                    src="https://www.evernote.com/l/AOJvwDeLIhtAE4B8mglnnHc4TQ0y2p18xGYB/image.jpg"
                    alt="このアプリの使い方"
                />
                <select name="selectExplanation" id="explanationList">
                    <option value="noselectDefault"></option>
                    <option value="selectTimeline"></option>
                    <option value="selectSchedule"></option>
                    <option value="selectSearch"></option>
                    <option value="selectNotification"></option>
                    <option value="selectContact"></option>
                </select>
            </div>
        </>
    );
};

export default Top;
