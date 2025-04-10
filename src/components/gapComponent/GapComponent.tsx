import React from "react";

interface GapComponent {
  gapHeight?: any;
  gapWidth?: any;
}

export const GapComponent: React.FC<GapComponent> = ({
  gapHeight,
  gapWidth,
}) => {
  return <div style={{ height: gapHeight, width: gapWidth }} />;
};
