import {Container, Form} from './styles'
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft } from 'react-icons/fi'



export function New() {

    return (
        <Container>
            <Header />

        <main>
            <Form>
                <header>
                    <ButtonText title="Voltar"/>
                    <h1>Novo Filme</h1>
                </header>
                <div>
                    <Input placeholder="Título"/>
                    <Input placeholder="Sua nota (de 0 a 5)"/>
                </div>
                <Textarea placeholder="Observações" />

                <Section title="Marcadores">
                    <div className='tags'>
                    <NoteItem value="Ficção"/>
                    <NoteItem isNew placeholder="Novo marcador"/>
                    </div>
                    
                </Section>
                <div class="buttons">
                    <button class="buttonExcluir">
                        Excluir Filme
                    </button>
                    <Button title="Salvar Alterações"/>
                </div>
            </Form>
        </main>


        </Container>

    )
}