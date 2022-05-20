import React from "react";

export default function BackToTop() {

    const [backToTop, setBackToTop] = React.useState(false);

    window.addEventListener("scroll", function () {
        if (this.scrollY > 100) {
            setBackToTop(true)
        }
        else {
            setBackToTop(false)
        }
    })

    function bttClickHandle() {
        window.scrollTo({ top: 0, behavior: 'smooth', });
    }

    return (
        <div>
            {
                backToTop &&
                <span class="back-to-top" onClick={bttClickHandle}>
                    <i class="fa fa-chevron-up" aria-hidden="true"></i>
                </span>
            }
        </div>
    )
}