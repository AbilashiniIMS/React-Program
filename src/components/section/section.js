import React from 'react';
import './section.css';
import Card from './card/card';

const Section = (props) => {
  return (
    <section className={props.type}>
      <div className="wrapper">
        <Card
          img="https://picsum.photos/id/54/400/300"
          offer="EXCLUSIVE"
          title=" Macaroon Cookies"
          text=" Quite different from macarons, macaroons are coconut based
          with a dense, lumpy texture that’s sweet and chewy. Some macaroons are
          even dipped in chocolate for extra indulgence."
          buttonType="button1"
        />
        <Card
          img="https://picsum.photos/id/1/200/300"
          offer="EXCLUSIVE"
          title=" Sugar Cookies"
          text=" Made with basic ingredients, such as sugar, flour, butter, and
          vanilla, sugar cookies are easy to make and insanely
          popular. They’re typically made by rolling out the dough and
          cutting into shapes before decorating with icing, sprinkles, or
          colored sugar."
          buttonType="button2"
        />
        <Card
          offer="EXCLUSIVE"
          title="  Chocolate Chip Cookies"
          text=" Chocolate chip cookies are the perennial classic and longtime fan
          favorite. They can be soft and chewy or crispy and crunchy
          depending on how you make them and the ingredients you use. Either
          way, they’re completely delicious."
          buttonType="button3"
        />
      </div>
    </section>
  );
};
export default Section;
