import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";
import { Input } from '../Input'
import { Link } from 'react-router-dom'



export function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>
            <Input 
                placeholder="Pesquisar pelo título"
                type="text"
            />
            <Profile to="/profile">
                <div>
                    <strong>Lucas Muniz</strong>
                    <Logout>
                        Sair
                    </Logout>
                </div>
                <img 
                    src="https://github.com/LucasRaphaelMuniz.png" 
                    alt="Foto do usuário"                
                />
            </Profile>
        </Container>
    )
}