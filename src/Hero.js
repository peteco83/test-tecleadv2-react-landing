import React, { Component } from "react";
import ReactDOM from "react-dom";
import onScroll from "react-onscroll";
import "./style/hero.scss";
import alpine from "./images/alpine-5455013_1920.jpg";

export default class Hero extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY;
      if (isTop >= 342) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
      console.log(window.scrollY);
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    return (
      <div>
        <div className="hero">
          <img src={alpine} alt="hero"></img>
          <div
            className={
              this.state.scrolled ? "statement-passive" : "statement-active"
            }
          >
            <h1>We combine our technical expertise with know-how</h1>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            eum pariatur atque quae cum, eaque corrupti fuga doloremque minus
            nihil, sapiente possimus illo ipsum nobis cumque odio veniam
            aspernatur officiis. Commodi quos deserunt maxime iure est
            consectetur sunt qui. Quas adipisci laboriosam ratione corrupti
            accusantium aliquam asperiores repellat sequi perferendis veritatis
            odit cum iure, nostrum soluta sint quae deleniti reiciendis.
            Perspiciatis accusamus, ex sint adipisci sequi explicabo id
            molestias ea officiis et ratione doloremque libero, hic magni.
            Molestiae dolor perferendis quis. Laboriosam numquam cum similique
            id facilis? Voluptates, quia commodi? Expedita provident quae,
            voluptates quisquam nam fugit! Possimus laudantium dolores
            voluptate. Ex dolorum distinctio beatae quod dolores accusamus
            deleniti, unde est voluptatum tenetur laborum non architecto debitis
            ullam nobis consequatur! Et odit sit explicabo, modi cupiditate ea
            voluptate ad! Beatae impedit culpa molestiae magnam reiciendis
            illum! Necessitatibus nisi voluptate laboriosam dolores unde saepe
            sequi provident natus? Velit, dicta? Deleniti, architecto! Sapiente
            voluptas similique perferendis deserunt saepe impedit quasi, laborum
            fuga eos, adipisci consequuntur architecto tenetur ipsum, eligendi
            libero asperiores molestiae. Sed est nihil provident neque quo quam
            deleniti eveniet itaque. Nesciunt totam repudiandae amet! Expedita
            maxime deleniti blanditiis facere placeat sint molestiae quos
            repellendus, esse optio inventore! Dolore beatae impedit
            repellendus, quia maiores exercitationem repudiandae voluptatibus,
            suscipit excepturi fugit nobis? Deleniti, aut facilis nulla vel
            expedita quas distinctio explicabo reiciendis voluptas! Sequi soluta
            qui enim cupiditate esse, exercitationem illum quisquam
            voluptatibus, perspiciatis natus tenetur labore cumque incidunt
            numquam quaerat officiis. Non placeat dolore tenetur, unde
            repellendus consequatur cumque dicta error quae tempora veritatis
            excepturi aperiam accusantium laborum libero consequuntur voluptate
            minima culpa earum enim. Ea consectetur ipsa nobis vero placeat.
            Fugiat nemo ratione id inventore, quasi est atque dolorum earum
            placeat tempore incidunt, quia, cupiditate eius! Autem, vero.
            Reiciendis, in at optio adipisci consectetur odio amet cumque animi
            assumenda omnis! Delectus, rem explicabo consequatur quo facilis
            culpa voluptas voluptatum modi asperiores ad ex, tempora deserunt
            esse aperiam. Magnam tempora magni rem, qui fuga nam odio iusto
            distinctio maxime, explicabo cum! Nobis quae culpa sint temporibus
            ipsa nulla veritatis explicabo hic beatae repudiandae eligendi
            maxime eos consequatur, cumque blanditiis modi numquam nam adipisci
            laudantium labore suscipit. Alias nemo omnis voluptates ex. Iste
            dolore aperiam consectetur odit magni id sint accusantium
            praesentium omnis nihil, impedit pariatur officiis ut? Quas nisi
            quasi a quaerat. Nisi, consectetur inventore incidunt fugiat rem
            nesciunt quod vero. Amet quis consequatur exercitationem at delectus
            temporibus. Repellat soluta id eaque nam ab fugiat repudiandae,
            debitis nostrum quia accusantium autem facilis dolor harum quaerat
            quis doloremque laboriosam, optio fugit facere. Unde sequi
            perspiciatis facere cumque repudiandae et tenetur voluptate aut
            doloribus obcaecati, quas, iusto harum ducimus voluptates numquam?
            Dolorem cupiditate ratione cumque a deserunt natus nemo neque
            voluptates numquam unde. Consequatur nam eius laudantium quidem,
            repellat atque dignissimos quam provident inventore aliquid unde
            distinctio aspernatur assumenda. Nesciunt itaque reiciendis
            quisquam, voluptates recusandae saepe accusantium, delectus,
            deleniti blanditiis dignissimos nobis dolor? Similique, autem?
            Dolorem, voluptatem! Et perspiciatis enim corrupti dolore, autem
            unde quod labore earum, error, harum doloremque tempore ducimus!
            Ullam et commodi doloremque sit dolor, nam quisquam nulla soluta
            est? Quidem perferendis nobis necessitatibus facilis, qui voluptate?
            Aperiam ab atque consectetur voluptates rem quia voluptatem aliquid
            accusantium dolorem ut. Dolor ad delectus unde saepe soluta. Aperiam
            officia libero quas accusantium? Facere consectetur dicta vitae
            accusantium maxime molestias rem laborum accusamus asperiores neque
            non alias veniam beatae qui minima voluptatum earum velit, esse
            corporis repellat quam. Perspiciatis nostrum natus expedita veniam.
            Eligendi commodi mollitia possimus, repudiandae a delectus libero
            magni recusandae autem inventore ab iste architecto hic debitis
            consectetur consequatur pariatur odit saepe. Quibusdam, sequi
            perferendis optio ab expedita voluptatem tempora. Itaque eos odio
            quia consequatur culpa. Corporis iste, incidunt perspiciatis autem
            repudiandae explicabo illo similique fugiat ad, soluta sit quo
            possimus laboriosam! Odit hic ab aliquid, sint earum deleniti sunt.
            Quam magnam nostrum inventore vero harum iure nam animi quas libero
            velit omnis tenetur minus commodi cupiditate temporibus in amet,
            quaerat doloribus a dicta nemo blanditiis laudantium cumque facilis.
            Blanditiis. Praesentium, fugiat. Cum nostrum eligendi rem tempore
            corporis dolore minus veniam modi voluptates et itaque sed, libero
            provident quia dolores maiores debitis necessitatibus consectetur.
            Fugit suscipit error a omnis cupiditate! Qui consequatur sunt iste
            debitis, architecto officiis beatae asperiores ipsa. Officia, culpa
            incidunt adipisci, deserunt sunt sapiente laudantium distinctio
            laboriosam eligendi, facere corporis! Laboriosam itaque sunt
            voluptatum fugit provident vitae! Error, quos quo. Non, dignissimos
            officiis eaque reprehenderit aliquam deleniti delectus molestias
            ullam placeat sed iusto harum dolores possimus adipisci asperiores
            veniam illum exercitationem commodi praesentium incidunt!
            Cupiditate, voluptates exercitationem. Vitae, alias quibusdam odit
            placeat dignissimos atque commodi facere vero aperiam sunt
            voluptatum eligendi consequatur eaque officiis, maxime voluptate
            dolor accusamus laboriosam fugiat modi consequuntur cum
            necessitatibus dolores asperiores! Eum. At laudantium nisi nihil
            laborum assumenda id eaque harum maxime facilis ut mollitia animi
            culpa consequatur explicabo cum inventore accusamus, sunt totam est?
            Ad alias nulla ipsam, eligendi quibusdam facilis. Placeat suscipit
            voluptatibus ipsa dolor a tempora cumque nisi ipsum iusto quidem
            itaque numquam, qui veniam architecto ad optio! Aut alias obcaecati
            tempore aspernatur veritatis nisi quos qui impedit dolores. Beatae
            est doloremque necessitatibus accusamus. Sint ut cumque aliquam hic
            debitis obcaecati omnis, deserunt quibusdam soluta expedita commodi,
            quisquam iusto laborum, odio similique earum esse iure quidem
            veritatis eaque! Laudantium. Quos distinctio provident, hic nemo
            suscipit aspernatur animi maxime, aperiam possimus doloribus magnam
            ipsum ipsam. Beatae molestias nemo aspernatur iusto corporis cumque
            optio ad itaque dolorum, qui error eos velit? Explicabo sint a nisi
            perspiciatis omnis fugit vero voluptatem! Quam, quaerat! Vero
            numquam ipsum nulla nisi voluptatibus modi dolorum unde magni
            tenetur atque sequi laudantium voluptatem, impedit sunt iure sint.
            Commodi maxime vero, doloribus dignissimos non quod laudantium
            architecto omnis, accusamus quia iusto cumque eaque ducimus eveniet
            repudiandae deserunt! Dolores earum perspiciatis sapiente sequi,
            quia fuga ad veritatis quisquam ratione. Voluptatibus cum, eaque
            tenetur laborum, deleniti doloribus architecto nam numquam eos
            temporibus cupiditate asperiores praesentium accusamus. Dolore
            maxime minus voluptatibus tempora est, cumque eveniet a enim,
            deleniti accusantium excepturi voluptatem? Dolor laborum in
            laudantium, maxime repudiandae mollitia iure, a similique sit,
            aliquid eos aperiam quibusdam totam minus. Nihil rem labore impedit
            ducimus ea at odio. Fugit excepturi ipsam eveniet sed! At debitis
            quos praesentium vitae esse! Possimus quibusdam doloremque error
            dolor inventore reprehenderit similique aliquid quos blanditiis
            quaerat non amet voluptates, debitis quae numquam. Nihil asperiores
            perferendis tempora ipsum animi. Quam dolorum magni sed voluptatibus
            exercitationem cumque aut voluptatum iste sequi, dolorem nobis et
            nihil modi debitis. Expedita, pariatur dolores maxime aperiam nam
            consectetur libero veniam eum nulla assumenda fuga! Quis ducimus
            cupiditate odit magnam dicta dolor ullam hic doloribus voluptatum
            tenetur, sit maxime suscipit, vitae error nam voluptate porro quasi
            exercitationem? Laborum labore quae, itaque molestias est enim eos.
            Ab quas omnis assumenda? Repellendus, ipsum consequuntur odit quos,
            minus fuga veritatis dolores blanditiis tenetur totam asperiores
            doloremque excepturi pariatur quo praesentium aut eius, quis ab
            dolore eaque rem? Harum. Deleniti est temporibus omnis quas nostrum,
            laudantium unde? Suscipit officia maxime dolores non sunt minus
            atque illum inventore error in quo autem amet repudiandae, culpa,
            doloribus voluptates reprehenderit ipsam voluptas. Magni earum vitae
            molestiae fuga quasi rerum eius minus voluptates blanditiis
            temporibus mollitia, laborum fugit tempore adipisci illo at maiores
            dolores. Delectus hic earum rerum. Optio consequuntur ex numquam
            eveniet? Quis qui iusto perspiciatis cum aperiam aspernatur possimus
            numquam, porro repellendus tempore error necessitatibus velit
            explicabo hic tenetur minus veritatis repudiandae mollitia quod
            cupiditate optio voluptatum corporis adipisci. Quisquam, esse! Totam
            consequuntur labore, assumenda facere esse tempore expedita magnam
            quibusdam quis, nulla iste? Iure fugit quod sint ab autem,
            accusantium impedit eos porro ex, quae sapiente deserunt fuga, hic
            a. Qui magnam praesentium quo, voluptatibus velit sit, maiores
            tenetur perspiciatis deserunt, quisquam amet. Distinctio tempore
            nobis voluptate quasi reprehenderit nam at odio ratione, impedit, ab
            consequuntur facilis illo neque vitae. Distinctio explicabo eum
            nihil molestias, amet ex. Maxime distinctio quaerat numquam unde
            reiciendis nam eligendi iusto deserunt quia, dolore, neque aperiam
            error facilis modi, dignissimos temporibus quos. Saepe, id est!
            Aperiam odit in suscipit ab unde dolor praesentium deleniti,
            molestias rem reprehenderit facere velit. Neque cupiditate
            laudantium, excepturi debitis animi aliquid sint repellat, nisi
            blanditiis maxime non odio numquam at! Amet optio est eaque suscipit
            corrupti earum? Aliquam temporibus debitis maxime ratione, minima,
            nam aperiam veritatis sed deserunt doloribus, amet commodi sunt
            natus! Repudiandae explicabo quas vero iure incidunt repellat! Rerum
            dolore dolor in! Suscipit, deserunt? Possimus fugiat molestias, qui
            atque sint iste vero quae blanditiis nostrum sit sequi, delectus
            illum officiis perferendis ad doloremque iusto veniam beatae nobis
            inventore! Tempora, harum laborum. Dolorem at facilis incidunt, ea,
            ex in aliquam dicta iste quam sapiente neque, soluta quae maiores
            consectetur dignissimos unde et! Eveniet sed corrupti nobis
            distinctio, voluptates repellat. Dignissimos officiis nesciunt
            molestiae beatae blanditiis placeat eveniet fugiat quas aut facilis?
            Cumque, omnis? Nobis, maxime facere! Provident neque odit optio
            obcaecati praesentium nisi adipisci debitis sunt! Magnam,
            perspiciatis ipsum? Quos impedit nihil error saepe nam magni aperiam
            eaque rem veniam, omnis harum laboriosam! Possimus numquam ab,
            praesentium, adipisci alias officiis, molestiae consequuntur nobis
            dolores sunt inventore dolorem sint commodi!
          </p>
        </div>
      </div>
    );
  }
}

// export default function Hero() {
//   const [statementStatus, setStatementStatus] = useState(false);

//   const handleScroll = (e) => {
//     let element = e.target;
//     if(element.scrollHeight - element.scroll)
//   }

//   return (
//     <div>

//     </div>
//   );
// }
