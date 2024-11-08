function Card({ input1, input2 }) {
  return (
    <div className="Card">
      <h2>¡Hola {input1}!</h2>
      <p>Sabemos que tu color favorito es:</p>
      <div 
        className="color-box" 
        style={{ backgroundColor: input2 }}
      >
        {input2}
      </div>
    </div>
  );
}

export default Card;
