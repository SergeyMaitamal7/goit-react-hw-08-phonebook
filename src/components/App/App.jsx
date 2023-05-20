import { ContactForm } from 'components/FormContact/FormContact';
import { Section } from 'components/Section/Section';
import { RenderContacts } from 'components/RenderContacts/RenderContacts';
import { Filter } from 'components/Filter/Filter';
import { Container } from './App.styled';

export const App = () => {
  
 
  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm ></ContactForm>
      </Section>
      <Section title="Contacts">
        <Filter />
        <RenderContacts/>
      </Section>
    </Container>
  );
};


