import {
  ListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
  ButtonContainer,
  ContactContainer,
} from './ContactListItem.styled';

export const ContactListItem = ({ name, number, onDelete, onEdit }) => (
  <ListItem>
    <ContactContainer>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>
    </ContactContainer>

    <ButtonContainer>
      <DeleteButton onClick={onDelete}>Delete</DeleteButton>
    </ButtonContainer>
  </ListItem>
);
