import Head from "next/head";
import "../static/css/page.css";
import "../static/css/centerpane.css";
import "../static/css/halfpane.css";

const Page = props => (
  <div id={props.id} className={props.className} style={props.style}>
    {props.title ? (
      <Head>
        <title>{props.title || null}</title>
      </Head>
    ) : null}
    {props.children}
  </div>
);

export default Page;