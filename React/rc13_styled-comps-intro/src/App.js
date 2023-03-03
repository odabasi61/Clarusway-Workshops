import { Button, FS13Button } from "./components/Button.styled";
import HeaderText from "./components/HeaderText";
import Links from "./components/Links";
import Sarmal from "./components/Sarmal";

const App = () => {
  return (
    <>
      <Sarmal bg="dodgerblue">
        <HeaderText color="hotpink">Styled Components</HeaderText>
        <HeaderText color="hotpink" bgColor="green">
          Styled Components
        </HeaderText>
        <Button>Send</Button>
        <Button primary>Send</Button>
        <FS13Button react>Work</FS13Button>
        <FS13Button>Work harder</FS13Button>
      </Sarmal>
      <Sarmal>
        <Links href="https://www.clarusway.com" target={"_blank"}>
          Clarusway Web Site
        </Links>
        <Links small href="https://www.reactjs.org" target={"_blank"}>
          Reactjs Web Site
        </Links>
        <Links small href="https://www.npmjs.org" target={"_blank"}>
          NPM
        </Links>
      </Sarmal>
    </>
  );
};

export default App;
