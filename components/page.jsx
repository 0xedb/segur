import Head from "next/head";

const Page = props => (
  <div id={props.id} className={props.className}>
    {props.title ? (
      <Head>
        <title>{props.title || null}</title>
      </Head>
    ) : null}
    {props.children}
  </div>
);

export default Page;
