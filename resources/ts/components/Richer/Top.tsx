import React from "react";

const Top = () => {
    addEventListener("load", () => {
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
    });
    return (
        <>
            <h5 id="greetingText" className={"greetingText"}></h5>
        </>
    );
};

export default Top;
