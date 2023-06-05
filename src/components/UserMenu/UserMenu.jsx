import { useDispatch } from 'react-redux';
import { logOut } from "redux/auth/authOperations";
import { Button } from '@mui/material';
export default function UserMenu() {
  const dispatch = useDispatch();

  return (
    <div>
      <Button type="submit" variant="contained" color="secondary" onClick={() => dispatch(logOut())} >Logout</Button>
    </div>
  );
}
