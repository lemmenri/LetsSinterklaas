// pages/index.js
import { useState } from 'react';

const IndexPage = () => {
  const [showModal, setShowModal] = useState(null);

  const buttons = [
    { id: 1, label: 'Spelregels', position: 'top' },
    { id: 2, label: 'Timer', position: 'bottom-left' },
    { id: 3, label: 'Ronde 1: De SinterShuffle ', position: 'bottom-right' },
    { id: 4, label: 'Ronde 2: De SinterScheur ', position: 'bottom-left' },
    { id: 5, label: 'Ronde 3: De SinterSwap Finale ', position: 'bottom-right' },
  ];

  const handleButtonClick = (id) => {
    setShowModal(id);
  };

  const handleCloseModal = () => {
    setShowModal(null);
  };

  return (
    <div className="container">
      {buttons.map((button) => (
        <button
          key={button.id}
          className={`button ${button.position}`}
          onClick={() => handleButtonClick(button.id)}
        >
          {button.label}
        </button>
      ))}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>This is the content for Button {showModal}</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .button {
          color: white;
          width: 100%;
          padding: 15px;
          font-size: 16px;
          background-color: rgb(22, 101, 52);
        }

        .top {
          grid-column: span 2;
        }

        .bottom-left {
          grid-column: span 1;
          grid-row: span 1;
        }

        .bottom-right {
          grid-column: span 1;
          grid-row: span 1;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
