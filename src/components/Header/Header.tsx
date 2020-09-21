import React from "react";
import { useLocation } from "react-router-dom";
import { Layout, Typography } from "antd";

import "./Header.less";

const getLarvisQuote = (): string => {
  const quotes = [
    "All ur ore r belong to us",
    "Can I haz cheezburger?",
    "Do you liek teh API I made 4 u?",
    "Ur UI looks purrfect, hoo-man!",
    "If I fits, I deposits.",
    "Im in ur orbit, mappin ur soil...",
    "U gotta b kitten me!!1",
  ];
  return quotes[Math.floor(Math.random() * quotes.length)];
};

export const Header: React.FC = () => {
  const { pathname } = useLocation();
  const [quote, setQuote] = React.useState(getLarvisQuote());

  React.useEffect(() => {
    setQuote(getLarvisQuote());
  }, [pathname]);

  return (
    <Layout.Header className="header">
      <Typography.Title className="header__title">{quote}</Typography.Title>
    </Layout.Header>
  );
};
