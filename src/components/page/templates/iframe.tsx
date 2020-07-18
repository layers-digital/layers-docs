import { h } from "@stencil/core";

export default (props) => {
  const { page } = props;

  if (!page.src) {
    return (
      <div>
        Page has no src
      </div>
    );
  }
  return <iframe src={page.src} frameBorder="0"/>
};
