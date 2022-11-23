import Container from "../../components/components/Container";
import PageHeader from "../../components/PageHeader";
import Layout from "../../components/scene/Layout";
import S from "./404.module.sass";

export default function Error404() {
  return (
    <>
      <Layout>
        {/* <PageHeader
          data={{
            heading: "404 ERROR",
            subheading: [
              "File not found,",
              "How dare thet say!",
              "I am here,",
              "Just out of the way",
              "",
              "How was i found?",
              "A typo? A mistake?",
              "Or wre you snooping!",
              "",
              "Nonetheless we meet at last.",
              "I am fount - hip hip hooray!",
              "File no found! I loath that page!",
            ],
          }}
        /> */}
        <div className={S.__404}>
          <Container className={S.__container}>
            <p className={S.__line}>
              <b>&apos;File not found&apos;</b>,
            </p>
            <p className={S.__line}>How dare they say!</p>
            <p className={S.__line}>I am here,</p>
            <p className={S.__line}>Just out of the way.</p>
            <br />
            <p className={S.__line}>How was i found?</p>
            <p className={S.__line}>A typo? A mistake?</p>
            <p className={S.__line}>Or were you snooping!</p>
            <br />
            <p className={S.__line}>Nonetheless we meet at last.</p>
            <p className={S.__line}>I am fount - hip hip hooray!</p>
            <p className={S.__line}>
              <b>&apos;File no found!&apos;</b> I loath that page!
            </p>
          </Container>

          <h1 className={S.__eCode}>404!</h1>
        </div>
      </Layout>

      <style jsx>{`
        .error__404 {
           {
            /* overflow: hidden; */
          }
        }
      `}</style>
    </>
  );
}
