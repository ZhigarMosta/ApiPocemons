import "./not-found.scss";
import Btn from "@/components/btn/Btn";
import Image from "next/image";
import errorimg from "@/img/errorimg.svg";

const Error404 = () => {
  return (
    <>
      <main className="main">
        <Image src={errorimg} alt="error" className="imageErrors" />
        <div className="wrapperErrorsText">
          <p>The rocket team</p>
          <p className="bottomTextErrors">has won this time.</p>
        </div>
        <Btn classBtn="btnError">Return</Btn>
      </main>
    </>
  );
};

export default Error404;
