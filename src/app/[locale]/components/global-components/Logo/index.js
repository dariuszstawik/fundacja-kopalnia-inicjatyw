import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ className, onClick }) => {
  return (
    <Link href="/" onClick={onClick}>
      <Image
        src="/logo.svg"
        width="100"
        height="88"
        className={`m-10 ml-0 lg:ml-10 ${className}`}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
