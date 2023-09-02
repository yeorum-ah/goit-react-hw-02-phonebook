import { Contacts, SearchField } from "./Filter.styled"

export const Filter  = ({onChangeFilter, filter}) =>{

    return <Contacts>
        <SearchField type="text" 
        value={filter} 
        placeholder="Search..."
        onChange={event => onChangeFilter(event.target.value)}/>
       </Contacts>

  
}