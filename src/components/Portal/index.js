import { useLayoutEffect, useState } from "react";

import { createPortal } from "react-dom";

const createNewPortal = (wrapperId) => {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", wrapperId);
  document.body.appendChild(wrapper);
  return wrapper;
};

export const Portal = ({ children, wrapperId }) => {
  const [wrapper, setWrapper] = useState(null);

  useLayoutEffect(() => {
    let generated = false;
    let element = document.getElementById(wrapperId);
    if (!element) {
      generated = true;
      element = createNewPortal(wrapperId);
    }
    setWrapper(element);

    return () => {
      if (generated && element.parentNode)
        element.parentNode.removeChild(element);
    };
  }, []);

  if (!wrapper) return null;
  return createPortal(children, wrapper);
};

Portal.defaultProps = {
  wrapperId: "react-portal-wrapper",
};
