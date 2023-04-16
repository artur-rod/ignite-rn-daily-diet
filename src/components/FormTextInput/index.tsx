import { RefObject } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { Input, Title } from "./styles";

type Props = TextInputProps & {
  title: string;
  height?: number;
  width?: number;
  inputRef?: RefObject<TextInput>;
};

export function FormTextInput({ title, height = 50, width = 100, inputRef, ...rest }: Props) {
  return (
    <View style={{ width: `${width}%`, marginBottom: 24 }}>
      <Title>
        {title}
      </Title>
      <Input height={height} ref={inputRef} textAlignVertical="top" {...rest} />
    </View>
  );
}
