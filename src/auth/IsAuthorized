import { useContext } from 'react';
import { AuthContext } from './Auth.js';
import { When } from 'react-if';

function IsAuthorized(props) {

  let context = useContext(AuthContext);
  let authorized = context.can(props.capability);
  let allowed = context.loggedIn && authorized

  return (
    <When condition={allowed}>
    {props.children}
    </When>
  )
}

export default IsAuthorized;