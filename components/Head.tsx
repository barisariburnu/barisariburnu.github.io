import Head from "next/head";

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Baris Ariburnu is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Baris Ariburnu, web developer portfolio, Baris Ariburnu portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Baris Ariburnu's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:url" content="https://barisariburnu.github.io" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Baris Ariburnu",
};
