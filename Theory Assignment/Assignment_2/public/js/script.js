// ===============================
// GET ELEMENTS
// ===============================

const steps = document.querySelectorAll(".step-tab");
const contents = document.querySelectorAll(".assignment-step");

const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const stepIndicator = document.getElementById("stepIndicator");

let currentStep = 1;

const totalSteps = contents.length || 7;


// ===============================
// SHOW STEP
// ===============================

function showStep(stepNumber) {

    // Keep step within valid range
    if (stepNumber < 1) {
        stepNumber = 1;
    }

    if (stepNumber > totalSteps) {
        stepNumber = totalSteps;
    }

    currentStep = stepNumber;


    // ===========================
    // SHOW ACTIVE STEP TAB
    // ===========================

    steps.forEach((step) => {

        const number = Number(step.dataset.step);

        step.classList.toggle(
            "active",
            number === currentStep
        );

    });


    // ===========================
    // SHOW ONLY ACTIVE CONTENT
    // ===========================

    contents.forEach((content) => {

        const number = Number(content.dataset.content);

        content.classList.toggle(
            "active-content",
            number === currentStep
        );

    });


    // ===========================
    // STEP INDICATOR
    // ===========================

    if (stepIndicator) {

        stepIndicator.textContent =
            String(currentStep).padStart(2, "0")
            + " / "
            + String(totalSteps).padStart(2, "0");

    }


    // ===========================
    // PREVIOUS BUTTON
    // ===========================

    if (previousBtn) {

        previousBtn.disabled = currentStep === 1;

    }


    // ===========================
    // NEXT BUTTON
    // ===========================

    if (nextBtn) {

        if (currentStep === totalSteps) {

            nextBtn.textContent = "Finish ✓";

        } else {

            nextBtn.textContent = "Next Step →";

        }

    }


    // ===========================
    // SCROLL TO CONTENT
    // ===========================

    const activeContent =
        document.querySelector(".assignment-step.active-content");

    if (activeContent) {

        activeContent.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


// ===============================
// STEP TAB CLICK
// ===============================

steps.forEach((step) => {

    step.addEventListener("click", () => {

        const number =
            Number(step.dataset.step);

        showStep(number);

    });

});


// ===============================
// PREVIOUS BUTTON
// ===============================

if (previousBtn) {

    previousBtn.addEventListener("click", () => {

        if (currentStep > 1) {

            showStep(currentStep - 1);

        }

    });

}


// ===============================
// NEXT BUTTON
// ===============================

if (nextBtn) {

    nextBtn.addEventListener("click", () => {

        if (currentStep < totalSteps) {

            showStep(currentStep + 1);

        } else {

            // Assignment completed
            nextBtn.textContent = "Completed ✓";

        }

    });

}


// ===============================
// KEYBOARD NAVIGATION
// ===============================

document.addEventListener("keydown", (event) => {

    // Right arrow = next
    if (event.key === "ArrowRight") {

        if (currentStep < totalSteps) {

            showStep(currentStep + 1);

        }

    }


    // Left arrow = previous
    if (event.key === "ArrowLeft") {

        if (currentStep > 1) {

            showStep(currentStep - 1);

        }

    }

});


// ===============================
// COPY CODE BUTTON
// ===============================

const copyButtons =
    document.querySelectorAll(".copy-code");

copyButtons.forEach((button) => {

    button.addEventListener("click", async () => {

        const codeCard =
            button.closest(".code-card");

        if (!codeCard) return;

        const code =
            codeCard.querySelector("code");

        if (!code) return;

        try {

            await navigator.clipboard.writeText(
                code.innerText
            );

            const originalText =
                button.textContent;

            button.textContent = "Copied ✓";

            setTimeout(() => {

                button.textContent = originalText;

            }, 1500);

        } catch (error) {

            console.error(
                "Copy failed:",
                error
            );

        }

    });

});


// ===============================
// INITIALIZE
// ===============================

showStep(1);