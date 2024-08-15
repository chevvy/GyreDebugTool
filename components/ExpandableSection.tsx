import { ExpandableSection, Text } from "react-native-ui-lib";
import { KillPlayerButton } from "./KillCharacterButton";
import { useState } from "react";

interface ExpandableUtilitiesProps {
  children: JSX.Element;
  name: string;
}
export const ExpandableUtilities = ({
  children,
  name,
}: ExpandableUtilitiesProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <ExpandableSection
      expanded={isExpanded}
      sectionHeader={
        <Text grey10 text60>
          {name}
        </Text>
      }
      onPress={() => setIsExpanded(!isExpanded)}
    >
      {children}
    </ExpandableSection>
  );
};
