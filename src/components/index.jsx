// pages/index.js
import { useState } from 'react';
import { Spelregels } from '../components/spelregels'
import { Timer } from '../components/timer'
import { Ronde1 } from '../components/ronde1'
import { Ronde2 } from '../components/ronde2'
import { Ronde3 } from '../components/ronde3'

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
    <div className='h-screen p-4'>
      <div className='text-3xl my-4'>LetsSinterklaas</div>
      <div className="container">
        {buttons.map((button) => (
          <button
            key={button.id}
            className={`button ${button.position} rounded-lg`}
            onClick={() => handleButtonClick(button.id)}
          >
            {button.label}
          </button>
        ))}

        {showModal && (
          <div className="modal p-3">
            <div className="modal-content max-h-full overflow-auto">
              <>
                {showModal === 1 && (<Spelregels />)}
                {showModal === 2 && (<Timer />)}
                {showModal === 3 && (<Ronde1 />)}
                {showModal === 4 && (<Ronde2 />)}
                {showModal === 5 && (<Ronde3 />)}
                <button className='bg-green-800 text-white mt-4 px-6 py-2 rounded-2xl w-full' onClick={handleCloseModal}>Close</button>
              </>
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
    </div>
  );
};

export default IndexPage;
