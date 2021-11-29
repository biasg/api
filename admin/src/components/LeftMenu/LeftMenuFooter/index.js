import React from "react";
import Wrapper, { A } from "./Wrapper";

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        Powered by
        <A
          key="website"
          href="https://reactavancado.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;React Avançado
        </A>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
