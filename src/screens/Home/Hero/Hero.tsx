import s from "./Hero.module.scss";
import me from "../../../assets/me.png";
import Button from "../../../components/Button/Button";

const Hero = () => {
  return (
    <div className={s.hero}>
      <section className={s.container}>
        <div className={s.content}>
          <p>Hi, my name is</p>
          <h2>Ilias Kadyrkulov</h2>
          <h1>React Frontend Developer</h1>
          <Button />
          
        </div>
        <picture>
          <img src={me} className={s.myself} />
        </picture>
      </section>
    </div>
  );
};

export default Hero;
