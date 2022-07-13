import  {
  FormContainer,
  Header,
  LoginContainer,
  StyledForm,
  StyledImg,
  StyledInput,
  StyledButton,
} from './Login.style';
import {useNavigate} from 'react-router-dom'
import mealSvg from '../../assets/meal.svg';

const Login = () => {
const navigate = useNavigate(-1)

  const handleSubmit = (e)=> {
    e.prevendefault();
    navigate('/')
    
  }
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} />
        <Header>{'<CW/>'}Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="username" required />
          <StyledInput type="password" placeholder="password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;