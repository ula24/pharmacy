import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1567427361984-0cbe7396fc6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;


const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin:10px;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>انشاء حساب جديد</Title>
        <Form>
          {/* <Input placeholder="الاسم الاول" />
          <Input placeholder="الاسم الثاني" /> */}
          <Input placeholder="اسم المستخدم" />
          <Input placeholder="البريد الالكتروني" />
          <Input placeholder="كلمة المرور" />
          <Input placeholder="رقم الهاتف " />

          <Button>انشاء الحساب</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
