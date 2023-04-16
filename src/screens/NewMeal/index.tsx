import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { MealInfoContainer } from "@components/MealInfoContainer";
import { useNavigation } from "@react-navigation/native";
import { MealsDTO } from "@storage/MealsDTO";
import { createNewMeal } from "@storage/createNewMeal";
import { AppError } from "@utils/AppError";
import { randomUUID } from "expo-crypto";
import { useRef, useState } from "react";
import { Alert, Keyboard, TextInput, TouchableWithoutFeedback } from "react-native";
import { ButtonContainer, Container, FormContainer } from "./styles";

export function NewMeal() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [onDiet, setOnDiet] = useState(false);

  const nameRef = useRef<TextInput>(null);
  const descriptionRef = useRef<TextInput>(null);
  const dateRef = useRef<TextInput>(null);
  const hourRef = useRef<TextInput>(null);

  const { navigate } = useNavigation();

  function handleDateInput(input: string) {
    if (input.length === 2 && input.length > date.length) return setDate(`${input}/`);
    if (input.length === 5 && input.length > date.length) return setDate(`${input}/`);
    setDate(input);
  }

  function handleHourInput(input: string) {
    if (input.length >= 2 && input.length > hour.length) {
      const cleanInput = input.replaceAll(":", "")
      return setHour(`${cleanInput.substring(0, 2)}:${cleanInput.substring(2)}`);
    }
    setHour(input);
  }

  function handleOnDietButton() {
    console.log("Clique foi")
    setOnDiet(!onDiet);
  }

  async function handleAddNewMeal() {
    try {
      const newMeal: MealsDTO = {
        id: randomUUID(),
        date,
        time: hour,
        name,
        description,
        onDiet
      };

      await createNewMeal(newMeal);
      navigate("NewMealConfirmation", { type: onDiet ? "PRIMARY" : "SECONDARY" });
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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header title="Nova Refeição" goBack={() => navigate("Home")} />

        <FormContainer>
          <MealInfoContainer
            name={name}
            onChangeName={setName}
            nameRef={nameRef}
            description={description}
            onChangeDescription={setDescription}
            descriptionRef={descriptionRef}
            date={date}
            onChangeDate={handleDateInput}
            dateRef={dateRef}
            hour={hour}
            onChangeHour={handleHourInput}
            hourRef={hourRef}
            onDietValue={onDiet}
            handleOnDietButton={() => handleOnDietButton()}
          />

          <ButtonContainer>
            <Button title="Cadastrar refeição" onPress={handleAddNewMeal} />
          </ButtonContainer>
        </FormContainer>
      </Container>
    </TouchableWithoutFeedback >
  );
}
