import Image from ""; 

export default function Modal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2>{item.name}</h2>
        {item.image && (
          <Image src={item.image} alt={item.name} width={300} height={200} />
        )}
        {item.price && <p>قیمت: {item.price} تومان</p>}
      </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-content {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          position: relative;
          width: 80%;
          max-width: 500px;
          text-align: center;
        }
        .modal-close {
          position: absolute;
          top: 10px;
          right: 10px;
          background: transparent;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
