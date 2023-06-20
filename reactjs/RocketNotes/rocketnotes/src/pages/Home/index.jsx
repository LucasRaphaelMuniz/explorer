import { useState, useEffect } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';
import { api } from '../../services/api'

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";

export function Home(){
    const [tags, setTags] = useState([]);

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get("/tags");
            setTags(response.data);
        }
    }, []);
    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText 
                        title="Todos" 
                        isActive
                    />
                </li>
                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText 
                                title={tag.name}
                            />
                        </li>
                        
                    ))
                }

            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
            </Search>

            <Content>
                <Section Title="Minhas Notas">
                    <Note data={{
                        title: "React",
                        tags: [
                            {Id: '1', name: 'react'},
                            {Id: '2', name: 'Rocketseat'}
                        ]
                    }}
                    />
                </Section>

            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar nota

            </NewNote>
        </Container>
    )
}
