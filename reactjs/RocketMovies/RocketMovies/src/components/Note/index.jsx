import {Container} from './styles'
import {Tag} from '../Tag'
import {Stars} from '../Stars'

export function Note({data, value, description, ...rest}){
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>
            <Stars value={data.value} className="stars"/>
            <h2>{data.description}</h2>
            {
                data.tags && 
                <footer className='tags'>
                    {data.tags.map( tag => <Tag key={tag.id} title={tag.name}/>)}
                </footer>
            }
        </Container>
    )
}