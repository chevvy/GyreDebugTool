import { Card, ExpandableSection, Text, View } from "react-native-ui-lib";

interface Information {
  name: string;
  value: string;
}

export const Information = ({ name, value }: Information) => {
  return (
    <View row>
      <Text underline text70M>
        {name}
      </Text>
      <Text text70> : </Text>
      <Text text70>{value}</Text>
    </View>
  );
};
