import { FontAwesome } from "@expo/vector-icons";

export const ToggleableChevron = ({ isExpanded }: { isExpanded: boolean }) => {
  const iconName = isExpanded ? "chevron-circle-up" : "chevron-circle-down";
  return <FontAwesome name={iconName} size={14} />;
};
