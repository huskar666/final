
    document.addEventListener('DOMContentLoaded', (event) => {
        const modal1 = document.getElementById('modal1');
        const modal2 = document.getElementById('modal2');
        const openModal1Btn = document.getElementById('openModal1');
        const openModal2Btn = document.getElementById('openModal2');
        const closeModal1Btn = document.getElementById('closeModal1');
        const closeModal2Btn = document.getElementById('closeModal2');
      

        function openModal(modal) {
          modal.style.display = 'block';
        }
      

        function closeModal(modal) {
          modal.style.display = 'none';
        }

        openModal1Btn.addEventListener('click', () => {
          openModal(modal1);
        });
      

        openModal2Btn.addEventListener('click', () => {
          closeModal(modal1);
          openModal(modal2);
        });
      

        closeModal1Btn.addEventListener('click', () => {
          closeModal(modal1);
        });
      
        closeModal2Btn.addEventListener('click', () => {
          closeModal(modal2);
        });
      

        window.addEventListener('click', (event) => {
          if (event.target === modal1) {
            closeModal(modal1);
          }
          if (event.target === modal2) {
            closeModal(modal2);
          }
        });
      });
    