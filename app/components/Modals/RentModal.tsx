"use client";

import { useMemo, useState } from "react";
import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";
import Heading from "../Heading";
import { categories } from "../Navbar/Categories";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModal = () => {
  const rentModal = useRentModal();
  const [step, setStep] = useState(STEPS.CATEGORY);

  const onBack = () => {
    setStep((val) => val - 1);
  };

  const onNext = () => {
    setStep((val) => val + 1);
  };

  const actionLabel = useMemo(() => {
    switch (step) {
      case STEPS.PRICE:
        return 'Rent';
      default:
        return 'Next';
    }
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    switch (step) {
      case STEPS.CATEGORY:
        return undefined;
      default:
        return 'Back';
    }
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading title="Which of these best describes your place?"
      subtitle="Pick a category" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
        {categories.map((category) => (
          <div key={category.label} className="col-span-1">
            {category.label}
          </div>
        ))}
      </div>
      
    </div>
  )

  return (
    <Modal
      title="Airbnb your home!"
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step !== STEPS.CATEGORY ? onBack : undefined}
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
    />
  );
};

export default RentModal;
