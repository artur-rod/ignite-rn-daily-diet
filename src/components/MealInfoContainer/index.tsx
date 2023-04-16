import { BooleanButton } from "@components/BooleanButton"
import { FormTextInput } from "@components/FormTextInput"
import { FormContainer, TwoColumnFormContainer } from "@screens/NewMeal/styles"
import { RefObject } from "react"
import { TextInput } from "react-native"
import { Text } from "./styles"

type Props = {
  name: string;
  onChangeName: (text: string) => void;
  nameRef: RefObject<TextInput>;
  description: string;
  onChangeDescription: (text: string) => void;
  descriptionRef: RefObject<TextInput>;
  date: string;
  onChangeDate: (text: string) => void;
  dateRef: RefObject<TextInput>;
  hour: string;
  onChangeHour: (text: string) => void;
  hourRef: RefObject<TextInput>;
  onDietValue: boolean;
  handleOnDietButton: () => void;

}

export function MealInfoContainer({
  name,
  onChangeName,
  nameRef,
  description,
  onChangeDescription,
  descriptionRef,
  date,
  onChangeDate,
  dateRef,
  hour,
  onChangeHour,
  hourRef,
  onDietValue,
  handleOnDietButton }: Props) {
  return (
    <FormContainer>
      <FormTextInput
        title="Nome"
        value={name}
        onChangeText={(e) => onChangeName(e)}
        inputRef={nameRef}
        onSubmitEditing={() => descriptionRef.current?.focus()}
        returnKeyType="done"
      />
      <FormTextInput
        title="Descrição"
        value={description}
        onChangeText={(e) => onChangeDescription(e)}
        multiline={true}
        height={100}
        inputRef={descriptionRef}
        blurOnSubmit
        onSubmitEditing={() => dateRef.current?.focus()}
        returnKeyType="done"
      />

      <TwoColumnFormContainer>
        <FormTextInput
          title="Data"
          keyboardType="number-pad"
          returnKeyType="done"
          width={50}
          value={date}
          onChangeText={(e) => onChangeDate(e)}
          maxLength={10}
          placeholder="10/03/2023"
          inputRef={dateRef}
          onSubmitEditing={() => hourRef.current?.focus()}
        />
        <FormTextInput
          title="Hora"
          keyboardType="number-pad"
          returnKeyType="done"
          width={50}
          value={hour}
          onChangeText={(e) => onChangeHour(e)}
          maxLength={5}
          placeholder="10:10"
          inputRef={hourRef}
          onSubmitEditing={() => hourRef.current?.blur()}
        />
      </TwoColumnFormContainer>

      <Text>Está dentro da dieta?</Text>
      <TwoColumnFormContainer>
        <BooleanButton
          title="Sim"
          active={onDietValue}
          type="PRIMARY"
          onPress={() => handleOnDietButton()}
        />
        <BooleanButton
          title="Não"
          active={!onDietValue}
          type="SECONDARY"
          onPress={() => handleOnDietButton()}
        />
      </TwoColumnFormContainer>
    </FormContainer>
  )
}