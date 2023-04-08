import { TextInputProps, View } from "react-native";
import { Input, Title } from "./styles";

type Props = TextInputProps & {
  title: string;
  height?: number;
  width?: number;
};

export function FormTextInput({ title, height = 50, width = 100, ...rest }: Props) {
  return (
    <View style={{ width: `${width}%`, marginBottom: 24 }}>
      <Title>
        {title}
      </Title>
      <Input height={height} textAlignVertical="top" {...rest} />
    </View>
  );
}
