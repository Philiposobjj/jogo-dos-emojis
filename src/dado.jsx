import React, { useState } from 'react';

function Dado() {
  const [emoji, setEmoji] = useState('Sortear');
  const emojis = ['😂', '❤️', '👍', '😁', '🙌'];

  function sortear() {
    let n = Math.floor(Math.random() * emojis.length);
    setEmoji(emojis[n]);
  }

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div> {/* Sobreposição escura */}
      <h1 style={styles.title}>Bem-vindo ao StoryEMojis</h1>
      <button style={styles.button} onClick={sortear}>{emoji}</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(145deg, #6a11cb, #2575fc)', // Gradiente moderno
    color: 'white', // Texto em branco para contraste
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Sobreposição escura para dar contraste
    zIndex: 1,
  },
  title: {
    fontSize: '40px',
    fontWeight: 'bold',
    letterSpacing: '2px',
    marginBottom: '40px',
    zIndex: 2,
    textAlign: 'center',
    textTransform: 'uppercase',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Sombra no texto para destacar
  },
  button: {
    backgroundColor: '#ff5733', // Cor do botão (laranja suave)
    color: 'white',
    fontSize: '28px',
    padding: '20px 50px',
    border: 'none',
    borderRadius: '50px', // Borda arredondada para dar um toque moderno
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease-in-out', // Animação de transição suave
    zIndex: 2,
  },
};

// Efeito no botão ao passar o mouse
styles.button[':hover'] = {
  backgroundColor: '#ff7744', // Mudança na cor do botão ao passar o mouse
  transform: 'scale(1.05)', // Animação de aumento do botão
};

export default Dado;
