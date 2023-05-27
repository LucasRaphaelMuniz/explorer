import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import Camera from '../../assets/camera'

import { Container, Form, Avatar } from "./styles";

import { Link } from 'react-router-dom'


export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/">
                    <ButtonText title="Voltar"/>
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img 
                        src="https://github.com/lucasraphaelmuniz.png" 
                        alt="Foto do usuario" 
                    />

                    <label htmlFor="avatar">
                        <Camera className="imgCam"/>
                        <input 
                            id="avatar"
                            type="file"
                        />
                    </label>
                </Avatar>
                <Input 
                    placeholder="Nome"
                    type="Text"
                    icon={FiUser}
                />

                <Input 
                    placeholder="E-mail"
                    type="Text"
                    icon={FiMail}
                />

                <Input 
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiLock}
                />
                <Input 
                    placeholder="Nova Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Salvar" />
            </Form>
        </Container>
    )
}