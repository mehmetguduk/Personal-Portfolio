export default function Contact() {
    return (
        <section id="contact">
            <h2 class="section-title">CONTAC<span>T</span></h2>
            <form class="contact-form" data-netlify="true" name="contact">
                <p class="form-error"></p>
                <input id="contact-name" name="name" type="text" placeholder="Name" autocomplete="off" spellcheck="false" />
                <input id="contact-email" name="email" type="text" placeholder="Email" autocomplete="off"
                    spellcheck="false" />
                <input id="contact-subject" name="subject" type="text" placeholder="Subject" autocomplete="off"
                    spellcheck="false" />
                <textarea id="contact-message" name="message" placeholder="Message" autocomplete="off"
                    spellcheck="false"></textarea>
                <button class="form-submit" type="button">Submit <i class="fa fa-paper-plane"
                    aria-hidden="true"></i></button>
            </form>
        </section>
    )
}

