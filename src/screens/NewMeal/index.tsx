import { FormTextInput } from "@components/FormTextInput";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Container, DateTimeFormContainer, FormContainer } from "./styles";

export function NewMeal() {
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  const { navigate } = useNavigation();

  function handleDateInput(input: string) {
    if (input.length === 2 && input.length > date.length) return setDate(`${input}/`);
    if (input.length === 5 && input.length > date.length) return setDate(`${input}/`);
    setDate(input);
  }

  function handleHourInput(input: string) {
    if (input.length === 2 && input.length > hour.length) return setHour(`${input}:`);
    setHour(input);
  }

  return (
    <Container>
      <Header title="Nova Refeição" goBack={() => navigate("Home")} />
      <FormContainer>
        <FormTextInput title="Nome" />
        <FormTextInput title="Descrição" multiline={true} height={100} />

        <DateTimeFormContainer>
          <FormTextInput
            title="Data"
            keyboardType="number-pad"
            width={50}
            value={date}
            onChangeText={e => handleDateInput(e)}
            maxLength={10}
            placeholder="10/03/2023"
          />
          <FormTextInput
            title="Hora"
            keyboardType="number-pad"
            width={50}
            value={hour}
            onChangeText={e => handleHourInput(e)}
            maxLength={5}
            placeholder="10:10"
          />
        </DateTimeFormContainer>
      </FormContainer>
    </Container>
  );
}
