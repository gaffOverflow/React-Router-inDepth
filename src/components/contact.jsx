export default function Contact() {
  return (
    <>
      <div>
        <h1 className="py-3 font-bold">Contact Us</h1>
        <form>
          <label htmlFor="mail" className="block py-2 text-sm">
            Your Email:
          </label>
          <input
            type="email"
            name=""
            id="mail"
            placeholder="user@gmail.com"
            className="text-orangeAccent mb-4 h-8 w-64 rounded-sm bg-[#D0D0D0] px-2 py-1 focus:outline-none"
          />

          <br />
          <label htmlFor="message" className="block py-2 text-sm">
            Your Message:
          </label>

          <textarea
            name="message"
            id=""
            cols="30"
            rows="5"
            className="mb-4 w-64 rounded-sm bg-[#D0D0D0]"
          ></textarea>
          <button className="bg-orangeAccent block px-2 py-1 text-sm">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
