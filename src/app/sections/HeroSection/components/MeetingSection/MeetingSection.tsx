import { ContactusButton } from "@/app/components/ContactUs-Button";

const MeetingSection = () => {
  return (
    <div className="text-center flex flex-col items-center  gap-4 text-beige font-kanit">
      <p className="font-kanit text-2xl">
        Interested to know how we can do the same for you?
      </p>
      <ContactusButton />
    </div>
  );
};

export default MeetingSection;
