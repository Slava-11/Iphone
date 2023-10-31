import { Title } from "../components/Title";
import { Text } from "../components/Text";
import bigIphone from "../img/bigIphone.png";
import { Button } from "../components/Button";
import { useApiContext } from "../context/AppContext";

//может подправить input

export const Form = () => {
  const {
    name,
    setName,
    mobile,
    setMobile,
    nameError,
    mobileError,
    setNameError,
    setMobileError,
  } = useApiContext();
  const nameChange = (e) => {
    setName(e.target.value);
  };
  const mobileChange = (e) => {
    setMobile(e.target.value);
  };
  const validateForm = () => {
    let isValid = true;

    if (name.trim() === "") {
      setNameError("Поле обов'язкове для заповнення");
      isValid = false;
    } else if (name.length > 20) {
      setNameError("Перевищує кількість символів(20)");
      isValid = false;
    } else if (!isNaN(name)) {
      setNameError("Введіть букви");
      isValid = false;
    } else {
      setNameError("");
    }

    if (mobile.trim() === "") {
      setMobileError("Поле обов'язкове для заповнення");
      isValid = false;
    } else if (isNaN(mobile)) {
      setMobileError("Введіть числа");
      isValid = false;
    } else {
      setMobileError("");
    }
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Good");
    }
  };
  return (
    <section className="flex flex-col forDesktop:flex-row forDesktop:flex-wrap forDesktop:justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-[100%] max-w-[600px] bg-thirdBgColour px-[14px] py-[50px] forDesktop:px-[92px] forDesktop:py-[137px]"
      >
        <Title className="text-white">ХОЧЕШ IPHONE 14 PRO?</Title>
        <input
          value={name}
          onChange={nameChange}
          className="text-secondTextColour block w-[100%] max-w-[400px] bg-thirdBgColour mt-[40px] border-solid border-b-[1px] border-secondTextColour pb-[10px] forDesktop:mt-[72px]"
          placeholder="Ваше ім'я"
          type="text"
        />
        {nameError && (
          <p className="bg-redColor text-secondTextColour inline-block px-[20px] py-[5px] rounded-[5px] mt-[10px]">
            {nameError}
          </p>
        )}
        <input
          value={mobile}
          onChange={mobileChange}
          className="text-secondTextColour block w-[100%] max-w-[400px] bg-thirdBgColour mt-[20px] border-solid border-b-[1px] border-secondTextColour pb-[10px] forDesktop:mt-[30px]"
          placeholder="Номер телефону "
          type="text"
        />
        {mobileError && (
          <p className="bg-redColor text-secondTextColour inline-block px-[20px] py-[5px] rounded-[5px] mt-[10px]">
            {mobileError}
          </p>
        )}
        <Text className="text-center text-secondTextColour mt-[30px]">
          Найближчим часом наш менеджер зв'яжеться з Вами
        </Text>
        <Button
          onClick={handleSubmit}
          className="text-mainColour text-[24px] px-[50px] py-[10px] rounded-[20px] bg-white mt-[30px] forDesktop:px-[70px] forDesktop:py-[14px]"
        >
          Замовити
        </Button>
      </form>
      <img
        className="w-[100%] max-w-[600px]"
        src={bigIphone}
        alt="no bigIphone"
      />
    </section>
  );
};
