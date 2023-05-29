import { Modal } from '../Modal';

export const ProtectionModal = ({ onClose, onNext }) => (
  <Modal title={'Continue without additional protection?'} onClose={onClose}>
    <p>
      You are liable for all damage and theft up to the full value of the rental
      vehicle, as well as third party accident and injury claims, plus admin
      fees. Your personal insurance or credit card may not fully cover this
      rental.
    </p>
    <div className="flex w-1/2 mx-auto my-4 justify-evenly">
      <button className="bg-blue-900 text-white p-2 mx-3" onClick={onClose}>
        Add protection
      </button>
      <button
        className="border-2 text-blue-900 border-blue-900 p-2"
        onClick={onNext}
      >
        Skip for now
      </button>
    </div>
  </Modal>
);
