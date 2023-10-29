const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row  justify-center gap-8 bg-red-500 p-10 text-slate-100">
      <div className="">
        <h1 className=" text-2xl pb-1 font-bold ">Fabricad</h1>
        <ul>
          <li className="">
            {/* <ion-icon
                a
                href="https://m.facebook.com/fabricad.serv/?_rdr"
                name="logo-facebook"
              ></ion-icon> */}
          </li>
          <li className="">
            {/* <ion-icon name="logo-instagram"></ion-icon> */}
          </li>
        </ul>
        <p className="">copyright@2023 by fabricadserv</p>
      </div>

      <div className="w-60">
        <h1 className=" text-2xl pb-1 font-medium	">About us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          placeat.
        </p>
      </div>

      <div className=" ">
        <h1 className=" text-2xl pb-1 font-medium">Contact</h1>
        <p>
          098-093-933
          <br />
          098-093-933
          <br />
          fabricad@gmail.com
        </p>
      </div>

      <div className=" flex flex-col gap-0 text-start">
        <span>politica de confidentialitate</span>
        <span>politica de rambursare</span>
        <span>politica de expediere</span>
        <span>aviz legal</span>
      </div>
    </footer>
  );
};

export default Footer;
