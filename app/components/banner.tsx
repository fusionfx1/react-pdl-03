import React from "react";
import Column from "./column";
import { TiInputChecked } from "react-icons/ti";
import Row from "./row";
import FormBanner from "./form-banner";
import { content } from "../content/text";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="min-h-24 bg-green-dark py-24 ">
      <div className="my-container">
        <Column className="text-white text-center gap-10">
          <Column className="gap-6">
            <div className="font-bold text-xl">{content.domain}</div>
            <div className="text-5xl font-medium">{content.title1}</div>
            <div className="text-3xl font-normal">{content.title2}</div>
          </Column>
          <div>
            <FormBanner />
          </div>

          <Column className=" mx-auto">
            <Row gap={3}>
              <TiInputChecked size={25} />
              <div> Available for all credit types</div>
            </Row>
            <Row gap={3}>
              <TiInputChecked size={25} />
              <div> Money straight to your bank</div>
            </Row>
            <Row gap={3}>
              <TiInputChecked size={25} />
              <div> Safe, secure and reliable</div>
            </Row>
          </Column>
        </Column>
      </div>
    </div>
  );
};

export default Banner;
