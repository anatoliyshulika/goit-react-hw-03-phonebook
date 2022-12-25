import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import Contact from 'components/Contact/Contact';

export default function ContactList({ contacts, onDelete }) {
  return (
    <List>
      {contacts.map(contact => (
        <Contact
          contact={contact}
          onDelete={onDelete}
          key={contact.id}
        ></Contact>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

// export default function ContactList({ contacts, onDelete }) {
//   return (
//     <List>
//       {contacts.map(({ id, name, number }) => (
//         <ListItem key={id}>
//           <div>{name}:</div>
//           <Box
//             width={2}
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//           >
//             {number}
//             <Button type="button" onClick={() => onDelete(id)}>
//               Delete
//             </Button>
//           </Box>
//         </ListItem>
//       ))}
//     </List>
//   );
// }
