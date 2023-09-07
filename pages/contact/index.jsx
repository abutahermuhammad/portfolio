import Link from "next/link";
import Container from "../../components/components/Container";
import PageHeader from "../../components/PageHeader";
import Layout from "../../components/scene/Layout";
import IMG from "../../assets/images/contact3.webp";
import { memo } from "react";
import dynamic from "next/dynamic";
import Meta from "../../components/Meta";
const PageBanner = dynamic(() => import("../../components/PageBanner"));
const ContactForm = dynamic(() => import("./ContactForm"));

function Contact() {
  /**
   * ToDo
   * On Every Submit:
   * 	1) User will receive a confirmation email.
   * 	2) A copy will be sent to my email.
   * 	3) A copy of response will store on the sanity.
   */
  const formSubmitHandler = (values) => {
    // Response Object
    // {
    // 	"name": "Abu Taher Muhammad",
    // 	"email": "abutahermuhammad@outlook.com",
    // 	"phone": "01627085640",
    // 	"message": "Nice to meet you Mr. Muhammad. I need some help with a project of mine."
    // }
    console.log(values);
    fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
        }
      }
    )
  };

  return (
    <>
      <Meta title="Contact" />

      <Layout>
        <PageHeader
          data={{
            heading: "GET IN TOUCH",
            subheading: ["ENGAGE.", "EXPLORE & DISCOVER.", "IGNITE POSSIBILITIES."],
          }}
        />

        <PageBanner img={IMG} />

        <section className="p_contact_form" data-scroll-section>
          <Container className="p_header">
            <h2 data-scroll className="p__subtitle">
              Contact me
            </h2>
          </Container>

          <Container className="p_content">
            <div className="p__left">
              <ContactForm onSubmit={formSubmitHandler} />
            </div>

            <div className="p__right">
              <div className="p_right_content">
                <h4 data-scroll className="p__title">
                  Email
                </h4>
                <ul className="p__list mb_20">
                  <li data-scroll>
                    <Link href="mailto:abut1081@gmail.com">
                      abut1081@gmail.com
                    </Link>
                    - Probably the easiest way to reach out to Muhammad..
                  </li>
                </ul>

                <h4 className="p__title">Social</h4>
                <ul className="p__list">
                  <li data-scroll>
                    <Link
                      href="https://www.linkedin.com/in/abutahermuhammad/"
                      target="_blank"
                    >
                      Linkedin
                    </Link>
                    - Where Muhammad strives to look professional 😎.
                  </li>
                  <li data-scroll>
                    <Link
                      href="https://github.com/abutahermuhammad"
                      target="_blank"
                    >
                      GitHub
                    </Link>
                    - Where Muhammad hopefully will post design related stuff
                    occasionally 🎨.
                  </li>
                </ul>

                <p data-scroll className="mt_20">
                  So in case you wonder anything, reach out to Muhammad,
                  it&apos;ll be fun!✌️
                </p>
              </div>
            </div>
          </Container>
        </section>
      </Layout>
    </>
  );
}

export default memo(Contact);
