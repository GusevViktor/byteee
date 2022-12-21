import React from "react";
import EditPanel from "src/close-part/pages/EventEdit/EditPanel";

interface ContentInterface {
  content: string
}
const Content = ({ content }: ContentInterface) => (
  <div>
    {content==="settings" && (<EditPanel />)}
  </div>
);

export default Content;
