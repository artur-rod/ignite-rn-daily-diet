import { BooleanButton } from "@components/BooleanButton";
import { Button } from "@components/Button";
import { FormTextInput } from "@components/FormTextInput";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import { MealsDTO } from "@storage/MealsDTO";
import { createNewMeal } from "@storage/createNewMeal";
import { AppError } from "@utils/AppError";
import { randomUUID } from "expo-crypto";
import { useState } from "react";
import { Alert } from "react-native";
import { ButtonContainer, Container, FormContainer, Text, TwoColumnFormContainer } from "./styles";

export function NewMeal() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [inDiet, setInDiet] = useState<boolean>(false);

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

  function handleInDietButton() {
    setInDiet(!inDiet);
  }

  async function handleAddNewMeal() {
    try {
      const newMeal: MealsDTO = {
        id: randomUUID(),
        date,
        time: hour,
        name,
        description,
        onDiet: inDiet
      };

      await createNewMeal(newMeal);
      navigate("Home");
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert("Nova refeição", err.message);
      } else {
        Alert.alert("Nova refeição", "Não foi possível adicionar uma nova refeição");
        console.log(err);
      }
    }
  }

  return (
    <Container>
      <Header title="Nova Refeição" goBack={() => navigate("Home")} />
      <FormContainer>
        <FormTextInput title="Nome" value={name} onChangeText={setName} />
        <FormTextInput
          title="Descrição"
          value={description}
          onChangeText={setDescription}
          multiline={true}
          height={100}
        />

        <TwoColumnFormContainer>
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
        </TwoColumnFormContainer>

        <Text>Está dentro da dieta?</Text>
        <TwoColumnFormContainer>
          <BooleanButton title="Sim" active={inDiet} type="PRIMARY" onPress={handleInDietButton} />
          <BooleanButton
            title="Não"
            active={!inDiet}
            type="SECONDARY"
            onPress={handleInDietButton}
          />
        </TwoColumnFormContainer>

        <ButtonContainer>
          <Button title="Cadastrar refeição" onPress={handleAddNewMeal} />
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
}
