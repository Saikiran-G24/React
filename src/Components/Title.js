import Logo from "../Assets/Img/foodvilla.png";

const Title = () => (
  <a href="/">
    <img data-testid='logo' className="h-52  min-w-52 p-2 ml-6   mt-1  " alt="Logo" src={Logo} />
    {/*src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTiYvL2R6PNlChsx7LeLbHF23-Fn9MXctMg&usqp=CAU";*/}
  </a>
);
export default Title;
