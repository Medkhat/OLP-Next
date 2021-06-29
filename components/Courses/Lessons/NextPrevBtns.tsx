import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Button, Icon } from "../../common/styles";
import { ResourceChanger } from "./style";

type NextPrevBtnTypes = {
  nextResourceId: number;
};

export const NextPrevBtns: React.FC<NextPrevBtnTypes> = ({
  nextResourceId,
}) => {
  const router: NextRouter = useRouter();

  return (
    <ResourceChanger>
      <Button btnType={"light"}>
        <Icon>
          <AiOutlineArrowLeft />
        </Icon>
        <span>Алдыңғы сабақ</span>
      </Button>
      <Link
        href={"/courses/[course]/lessons/[...lesson].tsx"}
        as={`/courses/${router.query.course}/lessons/${router.query.lesson[0]}/${nextResourceId}`}
      >
        <a>
          <Button>
            <span>Келесі сабақ</span>
            <Icon className={"right-icon"}>
              <AiOutlineArrowRight />
            </Icon>
          </Button>
        </a>
      </Link>
    </ResourceChanger>
  );
};
