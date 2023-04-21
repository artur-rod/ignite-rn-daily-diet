import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { MealInfoContainer } from "@components/MealInfoContainer";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MealsDTO } from "@storage/MealsDTO";
import { createNewMeal } from "@storage/createNewMeal";
import { editMeal } from "@storage/editMeal";
import { AppError } from "@utils/AppError";
import { randomUUID } from "expo-crypto";
import { useRef, useState } from "react";
import { Alert, Keyboard, TextInput, TouchableWithoutFeedback } from "react-native";
import { ButtonContainer, Container, FormContainer } from "./styles";

type RouteParams = {
  MealInfo: MealsDTO
}

export function MealForm() {
  const { params } = useRoute()
  const { MealInfo } = params as RouteParams

  const [name, setName] = useState(MealInfo?.name || "");
  const [description, setDescription] = useState(MealInfo?.description || "");
  const [date, setDate] = useState(MealInfo?.date || "");
  const [hour, setHour] = useState(MealInfo?.time || "");
  const [onDiet, setOnDiet] = useState(MealInfo?.onDiet || false);

  const nameRef = useRef<TextInput>(null);
  const descriptionRef = useRef<TextInput>(null);
  const dateRef = useRef<TextInput>(null);
  const hourRef = useRef<TextInput>(null);

  const { navigate } = useNavigation();

  function handleDateInput(input: string) {
    if (input.length === 2 && input.length > date.length) return setDate(`${input}/`);
    if (input.length === 5 && input.length > date.length) return setDate(`${input}/`);
    if (input.length === 10) hourRef.current?.focus()
    setDate(input);
  }

  function handleHourInput(input: string) {
    if (input.length >= 2 && input.length > hour.length) {
      const cleanInput = input.replaceAll(":", "")
      if (input.length === 5) hourRef.current?.blur()
      return setHour(`${cleanInput.substring(0, 2)}:${cleanInput.substring(2)}`);
    }
    setHour(input);
  }

  async function handleMealSave() {
    try {
      if (!name.length) {
        nameRef.current?.focus()
        throw new AppError("Está faltando o nome da refeição")
      }
      if (!description.length) {
        descriptionRef.current?.focus()
        throw new AppError("Está faltando a descrição da refeição")
      }
      if (!date.length) {
        dateRef.current?.focus()
        throw new AppError("Está faltando a data da refeição")
      }
      if (!hour.length) {
        hourRef.current?.focus()
        throw new AppError("Está faltando o horário da refeição")
      }

      const meal: MealsDTO = {
        id: MealInfo?.id || randomUUID(),
        date,
        time: hour,
        name,
        description,
        onDiet
      };

      if (MealInfo) {
        await editMeal(meal)
        navigate("MealDetails", { MealInfo: meal });
        return
      }

      await createNewMeal(meal);
      navigate("NewMealConfirmation", { type: onDiet ? "PRIMARY" : "SECONDARY" });
    } catch (err) {
      if (MealInfo && err instanceof AppError) {
        Alert.alert("Editar refeição", err.message);
      } else if (MealInfo) {
        Alert.alert("Editar refeição", "Não foi possível editar a refeição");
        console.log(err);
      } else if (err instanceof AppError) {
        Alert.alert("Nova refeição", err.message);
      } else {
        Alert.alert("Nova refeição", "Não foi possível adicionar uma nova refeição");
        console.log(err);
      }
    }
  }

  function handleBackButton() {
    if (MealInfo) {
      navigate("MealDetails", { MealInfo });
    } else {
      navigate("Home")
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header title={MealInfo ? "Editar refeição" : "Nova refeição"} goBack={handleBackButton} />

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
            handleOnDietButton={() => setOnDiet(!onDiet)}
          />

          <ButtonContainer>
            <Button title={MealInfo ? "Salvar alterações" : "Cadastrar refeição"} onPress={handleMealSave} />
          </ButtonContainer>
        </FormContainer>
      </Container>
    </TouchableWithoutFeedback >
  );
}
