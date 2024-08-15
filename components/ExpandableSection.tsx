import { ExpandableSection, Text, View } from "react-native-ui-lib";
import { useState } from "react";
import { ToggleableChevron } from "./ToggleableChevron";

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
        <View row centerV paddingV-5>
          <Text grey10 text60>
            {name}
          </Text>
          <View centerV centerH paddingH-10 paddingV-5>
            <ToggleableChevron isExpanded={isExpanded} />
          </View>
        </View>
      }
      onPress={() => setIsExpanded(!isExpanded)}
    >
      <View marginV-10>{children}</View>
    </ExpandableSection>
  );
};
