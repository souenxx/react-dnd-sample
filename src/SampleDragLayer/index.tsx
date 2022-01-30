import { FC } from "react";
import { useSampleDragLayer } from "./hooks";
import { SampleDragLayerPresenter } from "./presenter";

export const SampleDragLayer: FC = () => {
  const { isDragging, ...props } = useSampleDragLayer();
  console.log(isDragging);
  if (!isDragging) {
    return null;
  }

  return <SampleDragLayerPresenter {...props} />;
};
