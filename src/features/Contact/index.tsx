import { useForm, Controller } from "react-hook-form";
import { VALIDATION_RULES } from "../../utils/validations";
import { Input } from "@/components/Input";
import BunnyMail from "@/assets/contact/bunnyMail.png";

interface ContactData {
  firstName: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactData>({
    defaultValues: { firstName: '', email: '', message: '' }
  });

  const onSubmit = async (data: ContactData) => {

    console.log("Form Data:", data);
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert("Message sent! I'll get back to you soon.");
  };

  return (
    <div className="flex items-center animate-fadeIn justify-center w-full h-full">
      <div className="relative w-[260px] rounded-xl md:w-full md:max-w-3xl md:py-16 bg-bgDeepBlack/60 md:rounded-2xl overflow-hidden">

        <div className="bg-bgDarkPink/90 absolute top-0 w-full text-white py-3 md:py-4 text-center font-bold md:text-[20px] font-title ">
          Contact Form
        </div>

        <div className="flex flex-col items-center justify-center px-5 mt-14 gap-4 md:flex-row md:px-16 md:gap-12">

          <div className="flex flex-col items-center justify-center">
            <img
              src={BunnyMail}
              alt="Animated mail"
              className="w-22 md:w-65 h-auto pointer-events-none jello-horizontal"
            />
            <h2 className="font-bold md:text-lg font-title text-white">
              Get in touch!
            </h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full items-center">
            <div className="flex flex-col gap-5 w-full">
              <Controller
                name="firstName"
                control={control}
                rules={VALIDATION_RULES.fullName}
                render={({ field }) => (
                  <Input {...field} label="Full Name" placeholder="Evelyn ..." error={errors.firstName?.message} />
                )}
              />

              <Controller
                name="email"
                control={control}
                rules={VALIDATION_RULES.email}
                render={({ field }) => (
                  <Input {...field} label="Email" type="email" placeholder="hello@example.com" error={errors.email?.message} />
                )}
              />

              <div className="flex flex-col">
                <label className="text-xs md:text-[16px] font-bold mb-1 ">Message :</label>
                <Controller
                  name="message"
                  control={control}
                  rules={VALIDATION_RULES.text}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      rows={3}
                      className="border-b border-LineDarkPink bg-transparent outline-none text-xs md:text-[16px] resize-none focus:border-darkPink"
                      placeholder="Tell me about your project..."
                    />
                  )}
                />
                {errors.message && <span className="text-xs text-red-500 mt-1">{errors.message.message}</span>}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2.5 mb-5 text-xs md:text-lg md:w-60 md:py-4 md:mt-2 md:mb-0 rounded-full font-semibold text-white transition-all
              ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-bgDarkPink/90 hover:scale-105 active:scale-95 shadow-md'}`}
            >
              {isSubmitting ? "Sending..." : "Send mail"}
            </button>

          </form>

        </div>
      </div>

    </div>

  );
};

