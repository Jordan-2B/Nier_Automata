import React, { useState } from 'react';
import './App.css'; // Asegúrate de tener este archivo o elimina la línea si no usas CSS externo

function App() {
  // Estado para almacenar la lista de items
  const [items, setItems] = useState([]);
  // Estado para el input actual
  const [inputValue, setInputValue] = useState('');

  // Función para agregar un nuevo item
  const handleAddItem = () => {
    if (inputValue.trim() === '') return;
    
    const newItem = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };

    setItems([...items, newItem]);
    setInputValue(''); // Limpiar el input
  };

  // Función para marcar/desmarcar como completado
  const toggleComplete = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  // Función para eliminar un item
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Manejar tecla Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Lista de Tareas (React)</h1>
      
      <div style={styles.inputGroup}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Escribe una tarea..."
          style={styles.input}
        />
        <button onClick={handleAddItem} style={styles.button}>
          Agregar
        </button>
      </div>

      <ul style={styles.list}>
        {items.length === 0 ? (
          <p style={styles.emptyMessage}>No hay tareas pendientes.</p>
        ) : (
          items.map((item) => (
            <li key={item.id} style={styles.listItem}>
              <span 
                onClick={() => toggleComplete(item.id)}
                style={{
                  ...styles.itemText,
                  textDecoration: item.completed ? 'line-through' : 'none',
                  color: item.completed ? '#888' : '#000'
                }}
              >
                {item.text}
              </span>
              <button 
                onClick={() => deleteItem(item.id)}
                style={styles.deleteButton}
              >
                Eliminar
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

// Estilos básicos en JS (puedes moverlos a un archivo .css)
const styles = {
  container: {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    backgroundColor: '#fff'
  },
  title: {
    textAlign: 'center',
    color: '#333'
  },
  inputGroup: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px'
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  list: {
    listStyleType: 'none',
    padding: 0
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #eee'
  },
  itemText: {
    cursor: 'pointer',
    flex: 1
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft: '10px'
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#888'
  }
};

export default App;
