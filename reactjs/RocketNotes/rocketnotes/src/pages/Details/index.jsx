import {Container} from "./styles";
import { Button } from "../../components/buttons";

export default function Details() {

  return (
    <Container>
      <h1>Hello World</h1>
      <span>Lucas Muniz</span>
      <Button title="Inicio" loading />
      <Button title="Voltar"/>
      <Button title="Sair"/>
    </Container>   

  )
};