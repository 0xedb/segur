import Document, { Head, Main, NextScript } from "next/document";

class SegurPage extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width"
          />
          <meta
            name="crypt"
            content="QjHvzHdgLxfUYxEtwEcMoiW0fqxu9H0OcDFt0OUtsxYwIanCf1U0vdVyHUk28xsG8iNTWCZQRFbDwggIKWOJlA=="
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="static/img/favicon.ico"
          />
          <style>{`body { margin: 0 }`}</style>
        </Head>
        <body className="segur_page">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default SegurPage;
