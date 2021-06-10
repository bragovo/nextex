import { GetServerSideProps } from "next";

export const withAppData = (fn) => async (ctx) => {
  const pageData = await fn(ctx);

  if (pageData.props) {
    pageData.props = { ...pageData.props, foo: 1, bar: 2 };
  }

  return pageData;
};
