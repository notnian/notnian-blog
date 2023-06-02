import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Antonin HEBERT blog',
    description: 'Antonin HEBERT (notnian), senior backend developer. Freelancer, passionate about free software and open source. I publish my technical watch every week.',
    image: 'https://notnian.dev/assets/og.png'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@notniant" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script defer data-domain="blog.notnian.dev" src="https://plausible.notnian.dev/js/script.js"></script>
      </body>
    </Html>
  )
}
