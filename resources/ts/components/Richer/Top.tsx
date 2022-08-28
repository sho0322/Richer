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
        </>
    );
};

export default Top;
