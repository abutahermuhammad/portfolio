import { motion } from "framer-motion";
import { memo } from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";
import clsx from "clsx";

const Layout = ({ className, children, ...rest }) => (
  <>
    <Navigation />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: "opacity 1s ease" }}
      exit={{ opacity: 0, transition: "opacity 1s ease" }}
    >
      <main className={clsx("p_page", className)} {...rest}>
        {children}
      </main>
    </motion.div>
    <Footer />
  </>
);

export default memo(Layout);
