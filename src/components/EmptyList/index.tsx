import { Container, Text, Title } from "./styles";

export function EmptyList() {
  return (
    <Container>
      <Title>Nenhuma refeição cadastrada</Title>
      <Text>Adicione novas refeições para começar uma vida mais saudável!</Text>
    </Container>
  )
}