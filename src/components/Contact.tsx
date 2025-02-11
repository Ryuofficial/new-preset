function Contact() {
  return (
    <footer
      id="Contact-section"
      className=" space-x-5 grid grid-cols-1 md:grid-cols-2 gap-6 text-white py-11 pb-[4.8rem] md:px-[10rem] bg-[#06070a] h-fit justify-center items-center"
    >
      <div className="p-10">
        <p className="text-start font-semibold mb-5 text-xl">Lets Connect</p>
        <p className="text-start text-[0.9rem] text-[#979696]">
          If you have question or issue about the app you can contact the
          developer below.
        </p>
        <div className="flex items-center justify-start mt-4">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <a
            className="ml-2 text-[.84rem]"
            href="https://www.telegram.me/ryudev"
          >
            Telegram
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 px-10">
        <div className="flex justify-center md:justify-start space-x-4 py-4">
          <a href="https://www.youtube.com/@RyuDev_" aria-label="Youtube link">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
          <a href="https://www.tiktok.com/@dumpacryu" aria-label="Tiktok link">
            <ion-icon name="logo-tiktok"></ion-icon>
          </a>
          <a href="mailto:ryuofficial64@gmail.com" aria-label="Email link">
            <ion-icon name="mail-outline"></ion-icon>
          </a>
        </div>
        <p className="text-[0.7rem] text-center md:text-start text-[#979696]">
          Created by Ryu developer 2024
        </p>
      </div>
    </footer>
  );
}

export default Contact;
