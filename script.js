/* =========================
   ELEMENTS
========================= */

const enterBtn =
    document.getElementById("enterBtn");

const forgiveBtn =
    document.getElementById("forgiveBtn");

const finalMessage =
    document.getElementById("finalMessage");

const languageCard =
    document.getElementById("languageCard");

const languageBtn =
    document.getElementById("languageBtn");


/* =========================
   OPEN BUTTON
========================= */

if (enterBtn) {

    enterBtn.addEventListener("click", () => {

        const startSection =
            document.getElementById("start");

        if (!startSection) return;

        const nextSection =
            startSection.nextElementSibling;

        if (nextSection) {

            nextSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


/* =========================
   LANGUAGE SWITCHER
========================= */

const languages = [

    [
        "English",
        "I'm sorry, Bululu."
    ],

    [
        "Roman Urdu",
        "Mujhe waqai afsos hai, Bululu."
    ],

    [
        "Urdu",
        "مجھے واقعی افسوس ہے، بلولو۔"
    ],

    [
        "Simple",
        "I didn't want to hurt you. 🤍"
    ],

    [
        "Potata language",
        "Bhooki… sorry. 🥔"
    ]

];


let langIndex = 0;


if (languageBtn && languageCard) {

    languageBtn.addEventListener("click", () => {

        langIndex++;

        if (
            langIndex >= languages.length
        ) {

            langIndex = 0;

        }


        languageCard.classList.add(
            "flash"
        );


        setTimeout(() => {

            const lang =
                languageCard.querySelector(
                    ".lang"
                );

            const langLine =
                languageCard.querySelector(
                    ".lang-line"
                );


            if (lang) {

                lang.textContent =
                    languages[langIndex][0];

            }


            if (langLine) {

                langLine.textContent =
                    languages[langIndex][1];

            }


            languageCard.classList.remove(
                "flash"
            );

        }, 250);

    });

}


/* =========================
   FINAL BUTTON
========================= */

if (
    forgiveBtn &&
    finalMessage
) {

    forgiveBtn.addEventListener(
        "click",
        () => {

            finalMessage.classList.add(
                "show"
            );


            forgiveBtn.textContent =
                "No pressure 🤍";


            forgiveBtn.disabled = true;

        }
    );

}


/* =========================
   SCROLL REVEALS
========================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


if (
    "IntersectionObserver"
    in window
) {

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        (element) => {

            observer.observe(
                element
            );

        }
    );

} else {

    revealElements.forEach(
        (element) => {

            element.classList.add(
                "visible"
            );

        }
    );

}


/* =========================
   READY
========================= */

console.log(
    "Potata apology page loaded successfully 🥔"
);