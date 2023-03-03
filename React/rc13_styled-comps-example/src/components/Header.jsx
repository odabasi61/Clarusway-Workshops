import Button from "./styled/Button";
import Flex from "./styled/Flex";
import Image from "./styled/Image";
import Nav from "./styled/Nav";

const Header = () => {
  return (
    <div>
      <Nav>
        <div>
          <img src="./images/logo.png" width={"300px"} alt="clarusway-logo" />
        </div>

        <div>
          <Button color="#AF3A53">Apply Courses</Button>
          <Button bg="#AF3A53">Talk To Adviser</Button>
        </div>
      </Nav>

      <Flex>
        <div>
          <h1>The IT Career of Your Dreams Starts Here!</h1>
          <p>
            Clarusway is a leading international software Bootcamp. Join a micro
            class online with other trainees and learn coding skills with a
            highly-skilled instructor.
          </p>
          <Button bg="#AF3A53">Start your New Carier</Button>
        </div>

        <Image src="./images/hero.jpg" />
      </Flex>
    </div>
  );
};

export default Header;
