import { useForm, Controller } from "react-hook-form";
import { VALIDATION_RULES } from "@/utils/validations";
import { Input, TextArea, SuccessModal, Button } from "@/shared/components";
import BunnyMail from "@/assets/contact/bunnyMail.png";
import emailjs from "@emailjs/browser"
import { useState } from "react";

const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_USER: import.meta.env.VITE_EMAILJS_TEMPLATE_USER,
  TEMPLATE_ME: import.meta.env.VITE_EMAILJS_TEMPLATE_ME,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC,
};

interface ContactData {
  firstName: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const form = useForm<ContactData>({
    defaultValues: { firstName: '', email: '', message: '' }
  })
  const { control, handleSubmit, reset } = form;
  const { errors, isSubmitting } = form.formState;

  const onSubmit = async (data: ContactData) => {
    try {

      const commonParams = {
        from_name: data.firstName,
        reply_to: data.email,
        message: data.message,
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_USER,
        commonParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ME,
        commonParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setShowModal(true);
      reset();
    } catch (error) {
      console.error("Emailjs error:", error);
    }
  };

  return (
    <div className="flex items-center animate-fadeIn justify-center w-full h-full">
      <div className="relative w-65 rounded-xl md:w-full md:max-w-3xl md:py-14 bg-bgDeepBlack/60 md:rounded-2xl overflow-hidden">

        <div className="bg-bgDarkPink/90 absolute top-0 w-full text-white py-3 md:py-4 text-center font-bold md:text-[20px] font-title ">
          Contact Form
        </div>

        <div className="flex flex-col items-center justify-center px-5 mt-14 gap-4 md:flex-row md:px-16 md:gap-12">

          <div className="flex flex-col items-center justify-center">
            <img
              src={BunnyMail}
              alt="Animated mail"
              className="w-20 md:w-65 h-auto pointer-events-none jello-horizontal"
            />
            <h2 className="font-bold md:text-lg font-title text-white">
              Get in touch!
            </h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="flex flex-col mb-6 md:mb-0 md:gap-4 w-full items-center">
            <div className="flex flex-col gap-4 md:gap-5 w-full mb-4">
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
                <Controller
                  name="message"
                  control={control}
                  rules={VALIDATION_RULES.text}
                  render={({ field }) => (
                    <TextArea {...field} label="Message:" placeholder="Enter your message... " error={errors.message?.message} />
                  )}
                />
              </div>
            </div>

            <Button type="submit" disabled={isSubmitting} fullWidth={false}>{isSubmitting ? "Sending..." : "Send mail"}</Button>
          </form>

        </div>
      </div>

      {showModal && (
        <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} image={BunnyMail} title="Message sent!" description="Thank you for reaching out. I'll get back to you as soon as posible!" />
      )}
    </div>
  );
};

