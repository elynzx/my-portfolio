import { Button } from "@/shared/components";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  image?: string;
}

export const SuccessModal = ({
  isOpen,
  onClose,
  title,
  description,
  image }
  : Props) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm fadeIn">
      <div className="bg-bgDeepBlack border border-LineDarkPink p-8 rounded-2xl shadow-2xl flex flex-col items-center max-w-sm mx-4 text-center">

        {image && (<div className=" p-4 rounded-full">
          <img src={image} alt="Status icon" className="w-24 h-auto" />
        </div>)}

        <h3 className="text-xl font-bold text-white mb-2 font-title">{title}</h3>
        <p className="text-gray-400 text-sm mb-6">
          {description}
        </p>
        <Button onClick={onClose} fullWidth={true}>
          Close
        </Button>
      </div>
    </div>
  )
}

