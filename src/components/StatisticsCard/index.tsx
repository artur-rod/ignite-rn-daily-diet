import { Container, Number, Text, ViewTypeStyleProps } from "./styles";

type Props = {
  type: ViewTypeStyleProps;
  number: number;
  text: string;
  width: number;
};

export function StatisticsCard({ type, number, text, width }: Props) {
  return (
    <Container type={type} width={width}>
      <Number>
        {number}
      </Number>
      <Text>
        {text}
      </Text>
    </Container>
  );
}
